/**
 * Object란 어떤 특정한 형태의 종류의 모임이거나
 * 묘사형태 제품의 특징 등을 나타내는 속성들의 집합이다.
 * 내용물은 항상 key : value형태로 작성되고
 * key는 문자열이다.
 * value는 모든 값이 가능하다
 * null, undefined, boolean, number, string, array[], object{}, function 등등
 */
const musicGenre = {
    Pop: ["비욘세", "제이슨 므라즈", "아델"],
    K_Pop: ["BTS", "NCT"],
    Classic: ["모차르트", "베토벤", "쇼팽", "바흐"],
    OST: ["백지영", "아이유", "태연"],
};

// 값을 호출하는 방법

// 1. Object명.Key 형태로 직접 접근
musicGenre.Pop; // Pop가수들 배열
musicGenre.Pop[0]; // 비욘세

// 2. Key값들을 구조분해 할당으로 각각 호출
const { Pop, K_Pop, Classic, OST } = musicGenre;

// 3. Object.keys메소드를 활용하여 키들을 전부 가져온다.
const genreKeys = Object.keys(musicGenre);
// console.log(genreKeys); // [ 'Pop', 'K_Pop', 'Classic', 'OST' ]
// genreKeys.forEach((genre) => console.log(musicGenre[genre]));
// console.log(musicGenre["Pop"]);

const bookCategory = {
    국내도서: {
        소설: ["소나기", "구의증명"],
        "시/에세이": ["선인장", "여름", "평생 간직하고픈 시"],
        인문: ["총,균,쇠"],
    },
    서양도서: {
        문학: ["데미안", "호밀밭의 파수꾼"],
        취미생활: ["뜨개질", "영화감상", "발야구"],
        요리: ["수박화채", "만두", "감자전"],
    },
};

const bookKeys = Object.keys(bookCategory);
// console.log(bookKeys);
bookKeys.forEach((book) => {
    const categoryObj = bookCategory[book];
    // console.log(categoryObj);
    const subCategory = Object.keys(categoryObj);
    console.log(subCategory);
    subCategory.forEach((sub) => console.log(categoryObj[sub]));
});
