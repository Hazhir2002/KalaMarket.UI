import Button from "../components/common/Button";
import Card from "../components/common/Card";

export default function Login() {
  return (
    <div>
      <Card className="h-[500px] w-96 text-light_text">
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-row h-[60px]">
            <div className="w-1/2 flex flex-col justify-center items-center bg-gray-200 rounded-tl-2xl">
              <span className="font-bold">ثبت نام</span>
              <span>در کالا مارکت</span>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center rounded-tr-2xl text-accent">
              <span className="font-bold">ورود</span>
              <span>به کالا مارکت</span>
            </div>
          </div>
          <div>
            <span>ورود به حساب کاربری</span>
            <Button onClick={() => {}}>
              <span>Hello</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
