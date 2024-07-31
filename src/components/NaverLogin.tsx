import { useEffect } from 'react';

export default function NaverLogin() {
  useEffect(() => {
    const { naver }: any = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: '0V3OBGPQXT6L_6HirZoh',
      callbackUrl: 'http://localhost:5173/naver',
      clientSecret: 'OmpKQBt7Z6',
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: '53' },
    });
    naverLogin.init();
  }, []);

  return <div id="naverIdLogin">네이버로 로그인</div>;
}
