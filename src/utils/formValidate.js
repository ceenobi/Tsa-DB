const registerOptions = {
  email: {
    required: "Email is required",
    validate: {
      maxLength: (v) =>
        v.length <= 50 || "The email should have at most 50 characters",
      matchPattern: (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Invalid email address",
    },
  },
  password: {
    required: "Password is required!",
    validate: {
      minLength: (v) =>
        v.length >= 6 || "Password should not be less than 6 characters",
    },
  },
  confirmPassword: {
    required: "Please confirm your password",
  },
  fullName: {
    required: "This field is required",
  },
  popularlyKnownAs: {
    required: "This field is required",
  },
  phoneNumber: {
    required: "Please include a reachable number",
    validate: {
      minLength: (v) =>
        v.length >= 11 || "Should not be less than 11 characters",
    },
  },
  classCohort: {
    required: "Please select an option",
  },
  classType: {
    required: "Please select an option",
  },
  whatsAppNumber: {
    required: "You missed this",
    validate: {
      minLength: (v) =>
        v.length >= 11 || "Should not be less than 11 characters",
    },
  },
  depositPaid: {
    required: "This field is required",
  },
};

export default registerOptions;
