export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export type JsonPrimitive = string | number | boolean | null;
export type JsonObject = { [key in string]?: JsonValue };
export type JsonArray = JsonValue[];
