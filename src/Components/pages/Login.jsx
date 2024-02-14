import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    console.log('submited');
  };

  return (
    <div className=" flex min-h-[100vh]  items-center justify-center bg-bg-login p-4 ">
      <div className=" relative flex h-[95vh] w-[100%] items-center justify-center rounded-2xl bg-text-light-color p-4 clip-path-myPolygon tabletLg:clip-path-myPolygonLg desktop:h-[90%] desktop:w-[90%] ">
        <Link
          to={'/'}
          className="  absolute  right-[6%] top-[2%] flex flex-row justify-center  gap-1 tabletLg:gap-4"
        >
          <img
            src="./src/Images/LOGO 3.png"
            className=" block tabletLg:hidden"
          />

          <img
            src="./src/Images/LOGO 4.png"
            className=" hidden tabletLg:block"
          />
          <p className=" self-end font-peydaBold text-sm tabletLg:text-2xl desktop:text-3xl">
            فایر مانیتور
          </p>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="  mt-[50px] flex w-[300px] flex-col justify-between gap-3   tabletLg:mt-[100px]"
        >
          <p className=" text-right font-peydaBlack text-2xl">ورود به سامانه</p>
          <div className=" flex flex-col gap-2">
            <label for="name" class="form__label">
              نام کاربری{' '}
            </label>
            <input
              minLength={10}
              maxLength={20}
              name="userName"
              type="text"
              required
              title=" نام کاربری باید بین 10 تا 20 کاراکتر همراه با حرف انگلیسی و عدد باشد"
              placeholder="نام کاربری خود را وارد کنید"
              pattern="^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{10,20}$"
              className=" h-12 rounded-full border border-[#949494] pr-4 "
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label for="name" class="form__label">
              رمز عبور{' '}
            </label>
            <div className=" relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="رمز عبور خود را وارد کنید"
                required
                pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                value={password}
                className="  h-12 w-full rounded-full border border-[#949494] pr-4"
                onChange={handlePasswordChange}
                title="رمز عبور باید حداقل 8 کاراکتر و شامل حرف انگلیسی و عدد باشد"
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
          </div>

          <Button
            className=" mt-4 w-full rounded-full bg-main-color-2 font-peydaBold text-lg"
            variant="contained"
            type="submit"
          >
            ورود
          </Button>

          <div className=" mt-4 font-peyda">
            رمز عبور خود را فراموش کرده اید ؟
            <span className=" mr-1 border-b text-main-color-1 ">
              <Link to="/forgotpassword">
                <Button className=" font-peydaBold text-main-color-1">
                  فراموشی رمز
                </Button>
              </Link>
            </span>
          </div>
          <div className=" font-peyda">
            هنوز ثبت نام نکرده اید؟{' '}
            <span className="mr-1 border-b text-main-color-1 ">
              <Link to="/singup">
                <Button className="font-peydaBold text-main-color-1">
                  ثبت نام
                </Button>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
