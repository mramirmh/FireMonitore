import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';

// 6LeSNxApAAAAAEhPx2bCB8svWQm6dpkyZomPkww9
function ForgotPassword() {
  const [capVal, setCapVal] = useState(null);
  const [codeSent, setCodeSent] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [tryShowPassword, setTryShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickTryShowPassword = () => setTryShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    console.log('submited');
  };

  const code = 1234;

  return (
    <div className=" flex h-[100%] w-[100wh] items-center justify-center bg-bg-login p-4 ">
      <div className=" relative flex h-[100%] w-[100%] items-center justify-center rounded-2xl bg-text-light-color p-4 clip-path-myPolygon  tabletLg:clip-path-myPolygonLg  desktop:h-[90%] desktop:w-[90%] ">
        <Link
          to={'/'}
          className=" absolute right-[6%]   top-[1%] flex  flex-row justify-center gap-1  tablet:right-[2%] tabletLg:gap-4"
        >
          <img
            src="./src/Images/LOGO 3.png"
            className=" block tabletLg:hidden"
          />

          <img
            src="./src/Images/LOGO 4.png"
            className=" hidden tabletLg:block"
          />
          <p className=" self-end font-peydaBold text-sm tabletLg:text-xl desktop:text-3xl">
            فایر مانیتور
          </p>
        </Link>
        <div className=" mt-[20%] flex w-[300px] flex-col justify-between gap-3   tabletLg:mt-[12%]">
          <p className=" text-right font-peydaBlack text-2xl">
            فراموشی رمز عبور{' '}
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-2">
              <label for="phone">شماره تماس </label>
              <input
                name="phone"
                type="phone"
                pattern="^09\d{9}$"
                maxlength="11"
                title="شماره موبایل باید شامل 11 عدد و در ابتدای آن 09 باشد "
                placeholder="شماره موبایل خود را وارد کنید "
                required
                className=" h-12 rounded-full border border-[#949494] px-4 text-right "
              />
              <ReCAPTCHA
                sitekey="6LeSNxApAAAAAEhPx2bCB8svWQm6dpkyZomPkww9"
                onChange={(val) => setCapVal(val)}
                className=" mt-4"
              />
              {capVal ? (
                <Button
                  className=" mt-4 w-full rounded-full bg-second-color font-peydaBold text-lg text-bg-dark-color"
                  variant="contained"
                >
                  {' '}
                  ارسال کد به شماره تلفن
                </Button>
              ) : (
                ''
              )}
              <label for="number">کد ارسال شده </label>
              <input
                name="number"
                type="number"
                placeholder="کد ارسال شده را وارد کنید"
                required
                className=" h-12 rounded-full border border-[#949494] px-4 text-right "
                onChange={(e) => setCodeSent(e.target.value)}
                value={codeSent}
                minLength={4}
              />
              <Button
                className=" mt-4 w-full rounded-full bg-dark-star font-peydaBold text-lg text-second-color  "
                variant="contained"
              >
                بررسی کد
              </Button>

              <label for="password">رمز عبور جدید </label>
              {Number(codeSent) === code ? (
                <div className=" relative">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="رمز عبور جدید خود را وارد کنید"
                    required
                    className="  h-12 w-full rounded-full border border-[#949494] pr-4"
                    pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                    title="رمز عبور باید حداقل 8 کاراکتر و شامل حرف انگلیسی و عدد باشد"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <InputAdornment
                    position="end"
                    className=" absolute left-0 top-[50%]"
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                </div>
              ) : (
                <input
                  name="trypassword"
                  disabled
                  type={tryShowPassword ? 'text' : 'password'}
                  placeholder="کد ارسالی را درست وارد کنید"
                  required
                  className="  h-12 w-full rounded-full border border-[#949494] pr-4 disabled:bg-bg-light-color"
                />
              )}

              <label for="tryPassword">تکرار رمز عبور جدید</label>
              {Number(codeSent) === code ? (
                <div className=" relative">
                  <input
                    name="trypassword"
                    type={tryShowPassword ? 'text' : 'password'}
                    placeholder="رمز عبور جدید خود را تکرار کنید"
                    required
                    className="  h-12 w-full rounded-full border border-[#949494] pr-4"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <InputAdornment
                    position="end"
                    className=" absolute left-0 top-[50%]"
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickTryShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {tryShowPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                </div>
              ) : (
                <input
                  name="trypassword"
                  disabled
                  type={tryShowPassword ? 'text' : 'password'}
                  placeholder="کد ارسالی را درست وارد کنید"
                  required
                  className="  h-12 w-full rounded-full border border-[#949494] pr-4 disabled:bg-bg-light-color"
                />
              )}
              {password.length <= confirmPassword.length ||
              confirmPassword.length >= 2 ? (
                password !== confirmPassword ? (
                  <p className=" font-peydaMedium text-main-color-2">
                    پسووردها با هم تطابق ندارند
                  </p>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
            </div>
            <div className=" flex flex-row justify-between gap-4">
              <Button
                className=" mt-4 w-full rounded-full bg-main-color-2 font-peydaBold text-lg"
                variant="contained"
                disabled={!capVal || password !== confirmPassword}
                type="submit"
              >
                ورود
              </Button>

              <Link to="/">
                <Button
                  className=" mt-4 w-full rounded-full bg-second-color font-peydaBold text-lg text-text-dark-color"
                  variant="contained"
                  type="submit"
                >
                  انصراف
                </Button>
              </Link>
            </div>

            <div className=" mt-4 font-peyda"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
