"use client";

import { Accordion, AccordionItem, Image } from "@heroui/react";
import { Link } from "@heroui/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Product from "@/components/Product";
import Title from "@/components/title";

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const datas = [1, 1, 1, 1];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mt-8">
      <section className="bg-inherit w-full font-[sans-serif] my-8">
        <Swiper
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          className="mySwiper"
          modules={[Autoplay, Pagination, Navigation]}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
        >
          {datas.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center overflow-hidden">
                <div className="pr-8">
                  <h1 className="sm:text-4xl text-2xl font-bold text-inherit">
                    Readymadeui
                    <span className="text-orange-400"> Jumbotron Design</span>
                  </h1>
                  <p className="mt-4 text-sm text-inherit">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nuncet tempus blandit, metus mi consectetur
                    nibh, a pharetra felis turpis vitae ligula. Etiam laoreet
                    velit nec neque ultrices, non consequat mauris tincidunt.
                  </p>
                  <p className="mt-2 text-sm text-inherit">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nuncet tempus blandit, metus mi consectetur
                    nibh.
                  </p>
                  <button
                    className="px-6 py-3 mt-8 rounded-md text-inherit text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600"
                    type="button"
                  >
                    Get started
                  </button>
                </div>
                <div>
                  <Image
                    className="w-full h-full mb-8 md:mb-0 object-cover shrink-0 rounded-xl md:rounded-none md:rounded-l-2xl aspect-square"
                    src="https://readymadeui.com/team-image.webp"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="my-8 w-full">
        <Title desc="kami menyediakan parfum" title="Product Kami" />
        <Product />
      </section>

      <section className="my-8 w-full">
        <Title desc="keutamaan kami dalam melayani anda" title="QnA" />
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section>

      <section className="overflow-hidden bg-inherit sm:grid sm:grid-cols-2 sm:items-center my-8">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-inherit md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-inhebg-inherit md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                href="#"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt=""
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-none md:rounded-ss-[60px]"
          src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
      </section>
    </section>
  );
}
