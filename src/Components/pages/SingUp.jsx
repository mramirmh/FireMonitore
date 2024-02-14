import IconButton from '@mui/material/IconButton';

import { useEffect, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';
import IranCitiesProvincesSelect from 'react-iran-provinces-cities-select';
import provinces from '../../dataSelected-provinces-cities/province.json';
import cities from '../../dataSelected-provinces-cities/cities.json';
import { Select } from '@mui/base';
import { Option } from '@mui/base';
import FirstnameSingUp from '../details/FirstNameSingUp';
import LastNameSingUp from '../details/LastNameSingUp';

function SingUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [tryShowPassword, setTryShowPassword] = useState(false);
  const [capVal, setCapVal] = useState(null);
  const [selectProvince, setSelectProvince] = useState(null);
  const [selectCity, setSelectCity] = useState(null);
  const [city, setCity] = useState([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickTryShowPassword = () => setTryShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSelectProvince = (e) => {
    setSelectProvince(e.target.value);
    // console.log('province=>', e.target.value);
  };
  const handleSelectCity = (e) => {
    setSelectCity(e.target.value);
    // console.log('province=>', e.target.value);
  };

  const cityList = [];
  useEffect(() => {
    // console.log('provincy change ===>', selectProvince);
    cities.map((city) =>
      Number(selectProvince) === city.province_id ? cityList.push(city) : null,
    );
    setCity(cityList);
  }, [selectProvince]);

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
            ثبت نام در سامانه{' '}
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-2">
              <FirstnameSingUp />

              <LastNameSingUp />
              <label for="companyName">نام شرکت </label>
              <input
                name="companyName"
                type="text"
                placeholder="نام شرکت را وارد کنید"
                required
                className=" h-12 rounded-full border border-[#949494] pr-4 "
                maxLength={50}
              />
              <label for="state">استان </label>
              <select
                className=" h-12 rounded-full border border-[#949494] pr-4 "
                defaultValue={0}
                name="state"
                onChange={handleSelectProvince}
                value={selectProvince}
              >
                <option value={0}>استان خود را انتخاب کنید</option>
                {provinces.map((province) => (
                  <option value={province.id}>{province.title}</option>
                ))}
              </select>

              {/* <input
                name="state"
                type="text"
                placeholder="استان زندگی خود را وارد"
                required
                className=" h-12 rounded-full border border-[#949494] pr-4 "
              /> */}
              <label for="City">شهر </label>
              <select
                className=" h-12 rounded-full border border-[#949494] pr-4 "
                defaultValue={0}
                name="City"
                onChange={handleSelectCity}
                value={selectCity}
              >
                <option value={0}>شهر خود را انتخاب کنید</option>

                {city.map((city) => (
                  <option value={city.id}>{city.title}</option>
                ))}
              </select>
              {/* <input
                name="city"
                type="text"
                placeholder="شهر زندگی خود را وارد"
                required
                className=" h-12 rounded-full border border-[#949494] pr-4 "
              /> */}
              <label for="phone">شماره تماس </label>
              <input
                name="phone"
                type="phone"
                pattern="^09\d{9}$"
                maxlength="11"
                title="شماره موبایل خود را وارد کنید"
                placeholder="شماره موبایل خود را وارد کنید "
                required
                className=" h-12 rounded-full border border-[#949494] px-4 text-right "
              />
              <label for="email">ایمیل </label>
              <input
                name="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                title="فرمت ایمیل را به صورت صحیح وارد بفرمایید"
                required
                className=" h-12 rounded-full border border-[#949494] pr-4 "
              />
              <label for="userName">نام کاربری </label>
              <input
                minLength={10}
                maxLength={20}
                name="userName"
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
                pattern="^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{10,20}$"
                title=" نام کاربری باید بین 10 تا 20 کاراکتر همراه با حرف انگلیسی و عدد باشد"
                required
                className=" h-12 rounded-full border border-[#949494] pr-4 "
              />
            </div>
            <div className=" flex flex-col gap-1">
              <label for="password">رمز عبور </label>
              <div className=" relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="رمز عبور خود را وارد کنید"
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
              <label for="tryPassword">تکرار رمز عبور</label>
              <div className=" relative">
                <input
                  name="trypassword"
                  type={tryShowPassword ? 'text' : 'password'}
                  placeholder="رمز عبور خود را تکرار کنید"
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
            <ReCAPTCHA
              sitekey="6LeSNxApAAAAAEhPx2bCB8svWQm6dpkyZomPkww9"
              onChange={(val) => setCapVal(val)}
              className=" mt-4"
            />

            <Button
              className=" mt-4 w-full rounded-full bg-main-color-2 font-peydaBold text-lg"
              variant="contained"
              disabled={!capVal || password !== confirmPassword}
              type="submit"
            >
              ورود
            </Button>

            <div className=" mt-4 font-peyda">
              حساب کاربری فعال داردید؟{' '}
              <span className=" mr-1 border-b text-main-color-1 ">
                <Link to="/login">
                  <Button className=" font-peydaBold text-main-color-1">
                    ورود{' '}
                  </Button>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
