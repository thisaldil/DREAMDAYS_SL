import React from "react";

const slides = [
  {
    title: "The Big Day",
    subtitle: "",
    description: "Dont let anyone steal your thunder",
    image:
      "https://images.unsplash.com/photo-1726508684402-ee6029833696?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wedding Cakes",
    subtitle: "",
    description: "Sweet cake brings love smiles",
    image:
      "https://i.pinimg.com/736x/4e/05/e0/4e05e0294d544efd1789c409160c1db3.jpg",
  },
  {
    title: "Pre Wedding",
    subtitle: "",
    description: "Love shines through each shot",
    image:
      "https://images.unsplash.com/photo-1726766406089-0308c800b6b2?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bridal gown &  jewelry",
    subtitle: "",
    description: "Bridal jewels shine bright today.",
    image:
      "https://images.unsplash.com/photo-1450297166380-cabe503887e5?q=80&w=1765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wedding venues",
    subtitle: "",
    description: "Adventure is never far away",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR2f73SHMaZ8uG7kPBLQi4mlpb_XBcJ4vDF3FKapvZivGaUWqsVCz79wqmAksZS5TYwZ8FbeJ60_uXJk3S_LRIFMLbC-Bvy3DrdyzLwfCgmYbBBth5qe4mjMboZRX0S7zWLTu2_X5G49A/s640/12494983_10153483465483353_7372612678272169085_n.jpg",
  },

  {
    title: "Post Wedding",
    subtitle: "",
    description: "Love grows stronger every day.",
    image:
      "https://i.pinimg.com/736x/05/45/04/054504e4faceeb61c885dcb08e15e317.jpg",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) return;
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = { slideIndex: 0 };

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return { ...state, slideIndex: (state.slideIndex + 1) % slides.length };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{ backgroundImage: `url('${slide.image}')` }}
      />
      <div
        className="slideContent"
        style={{ backgroundImage: `url('${slide.image}')` }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Slideshow() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slideshow-container">
      <div className="slides">
        <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "PREV" })}>›</button>
      </div>
    </div>
  );
}
