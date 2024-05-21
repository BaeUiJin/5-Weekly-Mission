import { useEffectOnce } from "./useEffectOnce";

// TODO: 다른 컴포넌트에서 사용할 때 타입 지정할 것
export const useKakaoSdk = () => {
  const shareKakao = ({ url, title, description, imageUrl }) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SDK_KEY);
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: title,
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  useEffectOnce(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  });

  return { shareKakao };
};
