import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Basket = () => {


    const dispatch = useDispatch();
    const { basket } = useSelector((s) => s);

   

    return (
        <div className="container flex flex-wrap justify-between">
        {basket.map((el) => (
          <div className="">
            <div className="w-[200px] h-[400px] flex flex-col items-center justify-between py-[10px] px-10px">
              I<img width={"180px"} height={"200px"} src={el.backdrop_path} />
              <h2 className="text-[16px] font-bold ">{el.title}</h2>
              <p className="text-[12px]">{Math.round(el.popularity)} som</p>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Basket;