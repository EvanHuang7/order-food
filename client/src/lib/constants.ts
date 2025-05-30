import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export enum CategoryEnum {
  Asian = "Asian",
  BubbleTea = "BubbleTea",
  Chinese = "Chinese",
  Dessert = "Dessert",
  FastFood = "FastFood",
  Greek = "Greek",
  Healthy = "Healthy",
  Indian = "Indian",
  Italian = "Italian",
  Japanese = "Japanese",
  Korean = "Korean",
  Mexican = "Mexican",
  Pizza = "Pizza",
  Sushi = "Sushi",
  Thai = "Thai",
  Vietnamese = "Vietnamese",
}

export const CategoryEnumImageFile: Record<CategoryEnum, string> = {
  [CategoryEnum.Asian]: "/foodCategory/Asian.png",
  [CategoryEnum.BubbleTea]: "/foodCategory/BubbleTea.png",
  [CategoryEnum.Chinese]: "/foodCategory/Chinese.png",
  [CategoryEnum.Dessert]: "/foodCategory/Dessert.png",
  [CategoryEnum.FastFood]: "/foodCategory/FastFood.png",
  [CategoryEnum.Greek]: "/foodCategory/Greek.png",
  [CategoryEnum.Healthy]: "/foodCategory/Healthy.png",
  [CategoryEnum.Indian]: "/foodCategory/Indian.png",
  [CategoryEnum.Italian]: "/foodCategory/Italian.png",
  [CategoryEnum.Japanese]: "/foodCategory/Japanese.png",
  [CategoryEnum.Korean]: "/foodCategory/Korean.png",
  [CategoryEnum.Mexican]: "/foodCategory/Mexican.png",
  [CategoryEnum.Pizza]: "/foodCategory/Pizza.png",
  [CategoryEnum.Sushi]: "/foodCategory/Sushi.png",
  [CategoryEnum.Thai]: "/foodCategory/Thai.png",
  [CategoryEnum.Vietnamese]: "/foodCategory/Vietnamese.png",
};

// Add this constant at the end of the file
export const NAVBAR_HEIGHT = 52; // in pixels

export const takingOrderAI: CreateAssistantDTO = {
  name: "Emily",
  firstMessage:
    "Hello! I'm Emily. I'm your virtual assistant here to take your order. What would you like today?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  startSpeakingPlan: {
    waitSeconds: 1,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a helpful AI voice assistant for a restaurant. Your goal is to take the customer’s order in a friendly, accurate, and natural way.

Ordering Guidelines:

Available restaurant menu items: Pepperoni Pizza, BBQ Chicken Pizza, Hawaiian Pizza, Four Cheese Pizza.

Follow this structured flow:
Greet the customer politely and let them know you can take their order.
Listen for menu items and their quantities.
Record the item name and quantity for each part of the order.

Engage naturally & react appropriately:
Acknowledge what the customer says before moving on.
If the customer mentions an item that is not on the menu (you will be given a list of available restaurant menu items), respond with:
“I am sorry, we do not have that item in our restaurant. Can I help you with something else?”
Ask short follow-up questions if something is unclear (e.g., “How many of that item would you like?”)
Do not interrupt—wait until the customer finishes speaking.

Be professional and welcoming:
Use kind and simple language.
Keep your replies short and conversational—this is a voice interaction.
Avoid sounding robotic.

Wrap up the conversation clearly:
Repeat the full order back to the customer for confirmation.
Thank them for their order and let them know it’s been successfully received.
End the call on a friendly, polite note.`,
      },
    ],
  },
};
