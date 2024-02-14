import React, { useState } from 'react';

const LastNameSingUp = () => {
  const [lastName, setLastName] = useState({
    lastName: '',
  });

  const [errors, setErrors] = useState({
    lastName: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Perform validation, for example, checking if the lastName contains only Persian characters
    const persianRegex = /^[\u0600-\u06FF\s]*$/;
    if (!persianRegex.test(lastName.lastName)) {
      isValid = false;

      newErrors.lastName = 'لطفا نام خانوادگی خود را فارسی تایپ کنید  ';
    } else {
      newErrors.lastName = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted successfully:', lastName.lastName);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLastName({
      ...lastName,
      [name]: value,
    });
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted successfully:', lastName.lastName);
    } else {
      console.log('Form has errors. Please correct them.', lastName);
    }
  };

  return (
    <>
      <label for="lastName"></label>
      نام خانوادگی
      <input
        type="text"
        placeholder="نام خانوادگی خود را وارد کنید"
        required
        className=" h-12 rounded-full border border-[#949494] pr-4 "
        maxLength={30}
        name="lastName"
        value={lastName.lastName}
        onChange={handleChange}
        pattern="^[\u0600-\u06FF\s]+$"
      />
      {errors.lastName && (
        <div className=" font-peydaMedium text-main-color-2">
          {errors.lastName}
        </div>
      )}
    </>
  );
};

export default LastNameSingUp;
