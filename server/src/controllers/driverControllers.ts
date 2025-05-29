import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { s3Client } from "../lib/s3";
import { Upload } from "@aws-sdk/lib-storage";

export const getDriver = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const driver = await prisma.driver.findUnique({
      where: { cognitoId },
    });

    if (driver) {
      res.json(driver);
      return;
    } else {
      res.status(404).json({ message: "Driver not found" });
      return;
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving driver: ${error.message}` });
    return;
  }
};

export const createDriver = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email } = req.body;

    // Check input
    if (!cognitoId || !name || !email) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Check if there is existing in db before create
    const existing = await prisma.driver.findFirst({
      where: {
        OR: [{ cognitoId }, { email }],
      },
    });
    if (existing) {
      res.status(409).json({ message: "Drivier already exists" });
      return;
    }

    // Create driver
    const driver = await prisma.driver.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber: "",
        profileImgUrl: "",
      },
    });

    res.status(201).json(driver);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating driver: ${error.message}` });
    return;
  }
};

// Only allow to update name and phoneNumber
export const updateDriver = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const { name, phoneNumber, profileImgUrl } = req.body;

    let uploadedProfileImgUrl = "";
    // Upload profileImgUrl to AWS S3 bucket if there is a file and
    // the file IS NOT an existing AWS S3 file (profileImgUrl
    // starts with "https://of-s3-images.s3.us-east-1.amazonaws.com/driver")
    if (
      profileImgUrl &&
      !profileImgUrl.startsWith(
        "https://of-s3-images.s3.us-east-1.amazonaws.com/driver"
      )
    ) {
      if (!profileImgUrl.startsWith("data:image/")) {
        res.status(400).json({ error: "Invalid profileImgUrl format" });
        return;
      }

      // Extract content type and base64 string
      const matches = profileImgUrl.match(/^data:(image\/\w+);base64,(.+)$/);
      if (!matches) {
        res.status(400).json({ error: "Malformed base64 image" });
        return;
      }

      const contentType = matches[1];
      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, "base64");

      // Generate a key
      const key = `driver/${Date.now()}-profile-image.${
        contentType.split("/")[1]
      }`;

      const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        Body: buffer,
        ContentType: contentType,
      };

      const uploadResult = await new Upload({
        client: s3Client,
        params: uploadParams,
      }).done();

      uploadedProfileImgUrl = uploadResult.Location || "";
    }

    const updateDriver = await prisma.driver.update({
      where: { cognitoId },
      data: {
        name,
        phoneNumber,
        // Only include profileImgUrl field to update when
        // uploadedProfileImgUrl is not empty string
        ...(uploadedProfileImgUrl && {
          profileImgUrl: uploadedProfileImgUrl,
        }),
      },
    });

    res.json(updateDriver);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating driver: ${error.message}` });
    return;
  }
};
