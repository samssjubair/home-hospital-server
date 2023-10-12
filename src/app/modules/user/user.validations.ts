import { z } from 'zod';

const loginSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: 'Email is required',
        }),
        password: z.string({
            required_error: 'Password is required',
        }),
    }),
});

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    role: z.string({
      required_error: 'Role is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .refine(email => {
        // Use a regular expression to validate the email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      }, 'Invalid email address format'),
    contactNo: z.string({
      required_error: 'Contact no is required',
    }),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .refine(password => {
        // Add password validation rules here
        const minLength = 8; // Minimum password length
        const hasUppercase = /[A-Z]/.test(password); // At least one uppercase letter
        const hasLowercase = /[a-z]/.test(password); // At least one lowercase letter
        const hasNumber = /\d/.test(password); // At least one digit
        const hasSpecialChar = /[!@#$%^&*()_+[\]{};:'"<>,.?/~\\-]/.test(
          password
        ); // At least one special character

        return (
          password.length >= minLength &&
          hasUppercase &&
          hasLowercase &&
          hasNumber &&
          hasSpecialChar
        );
      }, 'Invalid password. It must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.'),
    address: z.string({
      required_error: 'Address is required',
    }),
    profileImg: z.string().optional(),
  }),
});


const update = z.object({
    body: z.object({
        name: z.string().optional(),
        role: z.string().optional(),
        email: z.string().optional(),
        contactNo: z.string().optional(),
        password: z.string().optional(),
        address: z.string().optional(),
        profileImg: z.string().optional(),
    })
});

export const UserValidation = {
    create,
    update,
    loginSchema
};