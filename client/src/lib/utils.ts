import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEnumString(str: string) {
  return str.replace(/([A-Z])/g, " $1").trim();
}

export function getRandomAverageRating(): number {
  const min = 4;
  const max = 5;
  const rating = Math.random() * (max - min) + min;
  return Math.round(rating * 10) / 10; // rounds to 1 decimal place
}

export function getRandomNumberOfReviews(): number {
  const min = 1;
  const max = 20;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomCookTime(): number {
  const min = 10;
  const max = 30;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPopularity(): number {
  const min = 3;
  const max = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanParams(params: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(params).filter(
      (
        [_, value] // eslint-disable-line @typescript-eslint/no-unused-vars
      ) =>
        value !== undefined &&
        value !== "any" &&
        value !== "" &&
        (Array.isArray(value) ? value.some((v) => v !== null) : value !== null)
    )
  );
}

export function formatPriceValue(value: number | null, isMin: boolean) {
  if (value === null || value === 0)
    return isMin ? "Any Min Price" : "Any Max Price";
  if (value >= 1000) {
    const kValue = value / 1000;
    return isMin ? `$${kValue}k+` : `<$${kValue}k`;
  }
  return isMin ? `$${value}+` : `<$${value}`;
}

export function formatToLocalString(dateStr: string | Date) {
  return new Date(dateStr).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

type MutationMessages = {
  success?: string;
  error: string;
};

export const withToast = async <T>(
  mutationFn: Promise<T>,
  messages: Partial<MutationMessages>,
  customErrorHandler?: (err: any) => boolean
) => {
  const { success, error } = messages;

  try {
    const result = await mutationFn;
    if (success) toast.success(success);
    return result;
  } catch (err) {
    // Let caller handle custom error
    if (customErrorHandler && customErrorHandler(err)) {
      throw err;
    }

    // Fallback to default error message
    if (error) toast.error(error);
    throw err;
  }
};

export const createNewUserInDatabase = async (
  user: any,
  idToken: any,
  userRole: string,
  fetchWithBQ: any
) => {
  // Map roles to API endpoints
  let createEndpoint = "";
  switch (userRole?.toLowerCase()) {
    case "customer":
      createEndpoint = "/customer";
      break;
    case "restaurant":
      createEndpoint = "/restaurant";
      break;
    case "driver":
      createEndpoint = "/driver";
      break;
    default:
      throw new Error(`Invalid user role: ${userRole}`);
  }

  const createUserResponse = await fetchWithBQ({
    url: createEndpoint,
    method: "POST",
    body: {
      cognitoId: user.userId,
      name: user.username,
      email: idToken?.payload?.email || "",
    },
  });

  if (createUserResponse.error) {
    throw new Error("Failed to create user record");
  }

  return createUserResponse;
};
