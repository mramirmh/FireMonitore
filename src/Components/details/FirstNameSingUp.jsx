import React, { useState } from 'react';

const FirstnameSingUp = () => {
  const [firstName, setFirstName] = useState({
    firstName: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Perform validation, for example, checking if the firstName contains only Persian characters
    const persianRegex = /^[\u0600-\u06FF\s]*$/;
    if (!persianRegex.test(firstName.firstName)) {
      isValid = false;

      newErrors.firstName = 'لطفا نام خود را فارسی تایپ کنید  ';
    } else {
      newErrors.firstName = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted successfully:', firstName.firstName);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFirstName({
      ...firstName,
      [name]: value,
    });
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted successfully:', firstName.firstName);
    } else {
      console.log('Form has errors. Please correct them.', firstName);
    }
  };

  return (
    <>
      <label for="firstName"></label>
      نام{' '}
      <input
        type="text"
        placeholder="نام خود را وارد کنید"
        required
        className=" h-12 rounded-full border border-[#949494] pr-4 "
        maxLength={30}
        name="firstName"
        value={firstName.firstName}
        onChange={handleChange}
        pattern="^[\u0600-\u06FF\s]+$"
      />
      {errors.firstName && (
        <div className=" font-peydaMedium text-main-color-2">
          {errors.firstName}
        </div>
      )}
    </>
  );
};

export default FirstnameSingUp;
