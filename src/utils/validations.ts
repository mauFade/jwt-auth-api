import { InvalidArgumentError } from "./errors";

export const stringNotNUllField = (value: string, name: string) => {
  if (typeof value !== "string" || !value.length) {
    throw new InvalidArgumentError(`The field ${name} is required.`);
  }
};

export const minLength = (value: string, name: string, min: number) => {
  if (value.length < min) {
    throw new InvalidArgumentError(
      `The field ${name} must be at least ${min} characters.`
    );
  }
};
