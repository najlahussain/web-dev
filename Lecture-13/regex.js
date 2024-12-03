const email = "test@exa@mple.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailRegex.test(email)) {
  console.log("Valid email address.");
} else {
  console.log("Invalid email address.");
}

