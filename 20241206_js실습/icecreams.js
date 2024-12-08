


const section = document.querySelector("section");
const icecreams = [
  "치토스밀크쉐이크 아이스크림",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
];

for(i = 0 ; i < icecreams.length; i++){
    const article = document.createElement('article');
    article.classList.add('article-box');
    section.append(article);
//아이스크림 카드 영역 생성

    const img = document.createElement('img');

    img.classList.add("img-box");
    img.setAttribute('src', `../iceimg/img${i+1}.png`);

    article.append(img);
//이미지 설정

    const h3 = document.createElement('h3');
    h3.classList.add('text-center');
    h3.textContent = `Top ${i+1}`;
    article.append(h3);

    const div = document.createElement('div');
    div.classList.add('text-center');
    div.textContent = icecreams[i];
    article.append(div);
    console.log(icecreams[i]);

}
