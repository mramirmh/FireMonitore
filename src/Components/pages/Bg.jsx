import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Select from 'react-select';
import IranCitiesProvincesSelect from 'react-iran-provinces-cities-select';

function Bg() {
  const [showPassword, setShowPassword] = useState(false);
  const [tryShowPassword, setTryShowPassword] = useState(false);
  const [capVal, setCapVal] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickTryShowPassword = () => setTryShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <p className=" font-peydaBlack text-2xl">ورود به سامانه</p>
      <div className=" flex flex-col gap-2">
        <label for="name" class="form__label">
          نام کاربری{' '}
        </label>
        <input
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
          required
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
            className="  h-12 w-full rounded-full border border-[#949494] pr-4"
          />
          <InputAdornment position="end" className=" absolute left-0 top-[50%]">
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
        className=" rounded-full bg-main-color-2 font-peydaBold text-lg"
        variant="contained"
      >
        ورود
      </Button>
      <div className=" font-peyda">
        رمز عبور خود را فراموش کرده اید ؟
        <span className=" mr-1 border-b text-main-color-1 ">
          <Button className=" font-peydaBold text-main-color-1">
            فراموشی رمز
          </Button>
        </span>
      </div>
      <div className=" font-peyda">
        هنوز ثبت نام نکرده اید؟{' '}
        <span className="mr-1 border-b text-main-color-1 ">
          <Button className="font-peydaBold text-main-color-1">ثبت نام</Button>
        </span>
      </div>

      <div className=" flex w-[300px] flex-col   gap-3">
        <p className=" font-peydaBlack text-2xl">ورود به سامانه</p>
        <div className=" flex flex-col gap-2">
          <label for="name" class="form__label">
            نام کاربری{' '}
          </label>
          <input
            type="text"
            placeholder="نام کاربری خود را وارد کنید"
            required
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
              className="  h-12 w-full rounded-full border border-[#949494] pr-4"
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
          className=" rounded-full bg-main-color-2 font-peydaBold text-lg"
          variant="contained"
        >
          ورود
        </Button>
        <div className=" font-peyda">
          رمز عبور خود را فراموش کرده اید ؟
          <span className=" mr-1 border-b text-main-color-1 ">
            <Button className=" font-peydaBold text-main-color-1">
              فراموشی رمز
            </Button>
          </span>
        </div>
        <div className=" font-peyda">
          هنوز ثبت نام نکرده اید؟{' '}
          <span className="mr-1 border-b text-main-color-1 ">
            <Button className="font-peydaBold text-main-color-1">
              ثبت نام
            </Button>
          </span>
        </div>
      </div>
      <IranCitiesProvincesSelect />
    </>
  );
}

export default Bg;
