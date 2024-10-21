import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Text, VStack, Alert } from "@chakra-ui/react";

const Reserve = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // State for phone number
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = value ? "" : "Name is required.";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = emailRegex.test(value) ? "" : "Invalid email format.";
        break;
      case "phone":
        const phoneRegex = /^\d{10}$/; // Simple validation for 10-digit phone numbers
        error = phoneRegex.test(value) ? "" : "Phone number must be 10 digits.";
        break;
      case "date":
        error = value ? "" : "Date is required.";
        break;
      case "time":
        error = value ? "" : "Time is required.";
        break;
      case "guests":
        error = value && value > 0 ? "" : "Number of guests must be at least 1.";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value); // Update phone number state
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "guests":
        setGuests(value);
        break;
      default:
        break;
    }
    validateField(name, value); // Validate field on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submission
    const finalErrors = {};
    if (!name) finalErrors.name = "Name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) finalErrors.email = "Invalid email format.";
    if (!phone || !/^\d{10}$/.test(phone)) finalErrors.phone = "Phone number must be 10 digits.";
    if (!date) finalErrors.date = "Date is required.";
    if (!time) finalErrors.time = "Time is required.";
    if (!guests || guests <= 0) finalErrors.guests = "Number of guests must be at least 1.";

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      setSuccess(false);
      return;
    }

    setErrors({}); // Clear errors
    setSuccess(true); // Set success message
    // Here you can handle the form submission (e.g., send data to an API)
    console.log({ name, email, phone, date, time, guests });

    // Clear the form fields
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests("");
  };

  return (
    <Box maxW="500px" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="md">
      <Text fontSize="2xl" mb={4} textAlign="center">Reserve a Table</Text>
      {success && <Alert status="success">Reservation successful!</Alert>}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.name}>
            <FormLabel>
              Name <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input 
              type="text" 
              name="name"
              value={name} 
              onChange={handleChange} 
              placeholder="Your Name" 
            />
            {errors.name && <Text color="red.500">{errors.name}</Text>}
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>
              Email <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input 
              type="email" 
              name="email"
              value={email} 
              onChange={handleChange} 
              placeholder="Your Email" 
            />
            {errors.email && <Text color="red.500">{errors.email}</Text>}
          </FormControl>
          <FormControl isInvalid={errors.phone}>
            <FormLabel>
              Phone Number <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input 
              type="tel" 
              name="phone"
              value={phone} 
              onChange={handleChange} 
              placeholder="10-digit Phone Number" 
            />
            {errors.phone && <Text color="red.500">{errors.phone}</Text>}
          </FormControl>
          <FormControl isInvalid={errors.date}>
            <FormLabel>
              Date <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input 
              type="date" 
              name="date"
              value={date} 
              onChange={handleChange} 
            />
            {errors.date && <Text color="red.500">{errors.date}</Text>}
          </FormControl>
          <FormControl isInvalid={errors.time}>
            <FormLabel>
              Time <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input 
              type="time" 
              name="time"
              value={time} 
              onChange={handleChange} 
            />
            {errors.time && <Text color="red.500">{errors.time}</Text>}
          </FormControl>
          <FormControl isInvalid={errors.guests}>
            <FormLabel>
              Number of Guests <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input 
              type="number" 
              name="guests"
              value={guests} 
              onChange={handleChange} 
              placeholder="Number of Guests" 
              min="1" 
            />
            {errors.guests && <Text color="red.500">{errors.guests}</Text>}
          </FormControl>
          <Button colorScheme="yellow" type="submit" width="full">
            Reserve
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Reserve;
