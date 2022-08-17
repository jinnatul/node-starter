import passport from "../config/passport";

export const GoogleRequest = passport.authenticate("google", {
  scope: ["email", "profile"],
});
