import Slider from "@/components/slider";
import NavLink from "@/components/nav-link";

export default function HomePage() {
    return (
        <div className="w-full ">
            <div className="w-main m-auto flex mt-6 flex-col">
                <div className="flex">
                    <div className="w-[20%] bg-red-100 flex flex-col justify-around items-center">
                        <NavLink href="/products" name="San pham"/>
                        <NavLink href="/products" name="San pham"/>
                        <NavLink href="/products" name="San pham"/>
                        <NavLink href="/products" name="San pham"/>
                        <NavLink href="/products" name="San pham"/>
                        <NavLink href="/products" name="San pham"/>
                    </div>
                    <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto">
                        <Slider/>
                    </div>
                </div>
                <div>
                    <h2>Sản phẩm mới</h2>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="bg-red-100">1</div>
                        <div className="bg-red-100">2</div>
                        <div className="bg-red-100">3</div>
                        <div className="bg-red-100">4</div>
                    </div>
                </div>
                <div>
                    <h2>Sản phẩm giam gia</h2>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="bg-red-200">1</div>
                        <div className="bg-red-200">2</div>
                        <div className="bg-red-200">3</div>
                        <div className="bg-red-200">4</div>
                    </div>
                </div>
                <div>
                    <h2>Sản phẩm ban chay, hot</h2>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="bg-red-200">1</div>
                        <div className="bg-red-200">2</div>
                        <div className="bg-red-200">3</div>
                        <div className="bg-red-200">4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
