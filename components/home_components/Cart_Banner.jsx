import React, { useState, useEffect } from "react";
import { urlFor } from "../../lib/client";
import Link from "next/link";

export default function Cart_Banner({ on_sale }) {
  const {
    banner_image,
    discount,
    product: { name, price, slug },
    sale_end_date,
    custom_message,
  } = on_sale[0];

  const imageUrl = banner_image ? urlFor(banner_image).url() : "";

  // Set up state for countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the remaining time
    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date(sale_end_date);
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Sale has ended, set everything to 0
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Update the countdown every second
    const timerId = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, [sale_end_date]);

  return (
    <section className="cart-banner pt-100 pb-100">
      <div className="container">
        <div className="row clearfix">
          {/* <!--Image Column--> */}
          <div className="image-column col-lg-6">
            <div className="image">
              <div className="price-box">
                <div className="inner-price">
                  <span className="price">
                    <strong>{discount}%</strong> <br /> off per Cake
                  </span>
                </div>
              </div>
              <img src={imageUrl} alt={name} title="go-to-single-product" />
            </div>
          </div>
          {/* <!--Content Column--> */}
          <div className="content-column col-lg-6">
            <h3>
              <span className="orange-text">Deal</span> of the month
            </h3>
            <h4>{name}</h4>
            <div className="text">
              <p>{custom_message}</p>
              <p>
                Hurry! Get <b>{discount}%</b> off on <b>{name}</b>! instead of{" "}
                <b>{`$${price}`}</b>, Offer ends on{" "}
                <b>{new Date(sale_end_date).toLocaleDateString()}</b>. Don't
                miss out on this amazing deal!
              </p>
            </div>

            {/* <!--Countdown Timer--> */}
            <div className="time-counter">
              <div className="time-countdown clearfix">
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{timeLeft.days}</span>Days
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{timeLeft.hours}</span>Hours
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{timeLeft.minutes}</span>Mins
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">{timeLeft.seconds}</span>Secs
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Link to the product's page */}
            <Link href={`/single-product/${slug.current}`} passHref>
              <a className="cart-btn mt-3">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
