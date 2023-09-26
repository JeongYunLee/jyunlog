// ROLLUP_NO_REPLACE 
 const _20230308Blogbuild = "{\"parsed\":{\"_path\":\"/blog/2023-03-08-blogbuild\",\"_dir\":\"blog\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"_empty\":false,\"title\":\"Nuxt와 TailwindCSS 템플릿으로 블로그 만들기\",\"description\":\"\",\"date\":\"2023-03-08\",\"tags\":[\"Nuxt\",\"TailwindCss\",\"blog\"],\"draft\":false,\"summary\":\"Nuxt 프레임워크 사용부터 Netlify를 이용한 호스팅, Google Domain 설정까지 새 블로그 구축 과정에 대한 내용입니다.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"jyunlog-main\",\"src\":\"/images/blogImg/2023-03-08-1.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"새 블로그에 작성하는 첫 번째 게시물에는 해당 블로그 구축한 과정을 기록해보려 한다.\\nNuxt 프레임워크 사용부터 Netlify를 이용한 호스팅, Google Domain 연결까지의 내용을 정리하였다.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"시작하기에 앞서 필자는 Nuxt 프레임워크를 처음 사용해봐서 설명한 내용 중 오류가 있을 수도 있다는 점 미리 양해를 구한다.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nuxt-tailwinds-css\"},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt + Tailwinds CSS\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_1-템플릿-선정\"},\"children\":[{\"type\":\"text\",\"value\":\"1. 템플릿 선정\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"블로그를 구축할 때 완전 처음부터 구축할 자신이 없다면, 템플릿을 사용하는 것도 괜찮은 방법인 것 같다.\\n깃헙과 여러 블로그 등 열심히 구글링을 해보다가 \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://jamstackthemes.dev/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Jamstack Themes\"}]},{\"type\":\"text\",\"value\":\"라는 사이트를 발견했다.\\nGastby, Next, Hugo등 여러 라이브러리와 다양한 CSS 종류로 만들어진 사이트 템플릿들이 전부 코드까지 공개되어 있다.\\nReact보다는 Vue가 조금은 더 익숙했고 원하는 기능들이 담겨 있는 \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://github.com/mdrathik/nuxtjs-tailwind-blog\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt+Tailwind 템플릿\"}]},{\"type\":\"text\",\"value\":\"을 골랐다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_2-github-repo-만들기\"},\"children\":[{\"type\":\"text\",\"value\":\"2. GitHub repo 만들기\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"고른 템플릿을 깃 클론 한 뒤, 새로 만들어준 깃헙 레포에 넣어준다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_3-내용-작성-디자인-수정하기\"},\"children\":[{\"type\":\"text\",\"value\":\"3. 내용 작성 + 디자인 수정하기\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"사실 Nuxt의 폴더 구조를 잘 알았으면 더 쉽게 수정했을 것 같긴 하지만 여러 파일들 열어서 이것저것 확인해봐도 이해할 수 있었다.\\n그리고 \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://nuxtjs.org/docs/get-started/installation\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt 공식문서\"}]},{\"type\":\"text\",\"value\":\"에서는 비교적 설명도 자세히 적어놓은 편인 것 같다.\\n내가 이해한 선에서 자주 사용한 코드와 폴더를 정리한다.\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"npm install\"}]},{\"type\":\"text\",\"value\":\": 'package.json'은 프로젝트 관련 설정과 npm으로 install한 라이브러리들을 관리하는 파일로 라이브러리의 버전도 여기서 확인할 수 있다. 터미널에서 \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"npm install\"}]},{\"type\":\"text\",\"value\":\"을 하면 package-lock.json(package.json을 도와주는 역할을 한다고 함) 파일이 자동으로 생성된다.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"content/articles\"}]},{\"type\":\"text\",\"value\":\": 블로그 글을 작성하는 폴더. md파일에 형식에 맞게 작성하면 된다.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"static\"}]},{\"type\":\"text\",\"value\":\": 이미지 파일들을 저장하는 폴더. 앞서 md파일에 글을 작성할 때에도 반드시 static폴더 내부 경로로 연결해줘야 한다.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"assets\"}]},{\"type\":\"text\",\"value\":\": main.css와 icon(svg파일)이 담겨있는 폴더\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"npm run generate\"}]},{\"type\":\"text\",\"value\":\": dist폴더를 생성해주는 코드. dist는 이후 호스팅 할 때 필요한 폴더 이다.\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"이 외에도 \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"components\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"pages\"}]},{\"type\":\"text\",\"value\":\" 폴더 안에는 여러 vue파일들이 있고 해당 파일에서 각 부분들의 요소들을 추가, 수정해주었다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_4-git-push\"},\"children\":[{\"type\":\"text\",\"value\":\"4. git push\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"당연하지만 중간중간 연결된 레포에 저장해서 넣어주는 걸 잊지 말아야 한다.\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[\"language-md\"],\"code\":\"git add .\\ngit commit -m \\\"커밋 메세지\\\"\\ngit push\\n\",\"language\":\"md\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"git add .\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"git commit -m \\\"커밋 메세지\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"git push\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"hosting-google-domain-연결\"},\"children\":[{\"type\":\"text\",\"value\":\"Hosting + Google Domain 연결\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_1-netlify-설정\"},\"children\":[{\"type\":\"text\",\"value\":\"1. Netlify 설정\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"netlify-main\",\"src\":\"/images/blogImg/2023-03-08-2.png\"},\"children\":[]},{\"type\":\"text\",\"value\":\"\\n블로그 깃헙 레포를 \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://www.netlify.com/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Netlify\"}]},{\"type\":\"text\",\"value\":\"와 연결한다. 이때 deploy의 'Build command' 부분을 \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"nuxt generate\"}]},{\"type\":\"text\",\"value\":\"로 바꿔줘야 정상적으로 빌드된다. dist폴더가 정상적으로 생성되어 있는 지도 꼭 확인해야 한다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_2-site-name-설정\"},\"children\":[{\"type\":\"text\",\"value\":\"2. site name 설정\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"deploy가 정상적으로 완료된 뒤 접속할 때 url은 '문자+숫자조합.netlify.app' 으로 생성되어 있을 것이다.\\n사이트 이름을 커스터마이징 하려면 site setting > change site name 에서 원하는 url이름을 지정하면 된다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_3-domain-설정\"},\"children\":[{\"type\":\"text\",\"value\":\"3. Domain 설정\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"위 단계까지만 해도 되지만, 개인 도메인을 구매하여 가지고 있다면 설정해주면 된다.\\n필자는 \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://domains.google/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Google Domain\"}]},{\"type\":\"text\",\"value\":\"을 구매하여 사용 중이다. (1년에 12$)\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"google-domain\",\"src\":\"/images/blogImg/2023-03-08-3.png\"},\"children\":[]},{\"type\":\"text\",\"value\":\"\\nDNS탭에서 맞춤 레코드 설정을 해주면 되는데, 도메인 자체를 사이트 url로 사용하고 싶다면 유형을 'A'로 지정해줘야 한다. 이때 데이터에 적는 ip address가 왜 75.2.60.5인지는 모르겠지만...\"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"netligy 공식문서\"}]},{\"type\":\"text\",\"value\":\"에도 그렇고 다들 이렇게 해주고 있어서 넣어줬더니 잘 작동해서 그냥 사용했다.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"netlify-domain\",\"src\":\"/images/blogImg/2023-03-08-4.png\"},\"children\":[]},{\"type\":\"text\",\"value\":\"\\nGoogle Domain을 설정한 후 Netlify domain setting을 해준다. 'Add domain alias'를 눌러서 각각 추가해준다.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"여기까지 해주면 기본적인 블로그 빌드는 끝이다!\\n수정한 파일을 git push 할 때마다 netlify는 자동으로 deploy 해준다.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"정리하고 보니 간단한데, 막상 했을 때는 중간중간 버전 문제나 추가해주고 싶은 기능들 넣어주다가 생기는 오류 등...다양한 방면으로 막히는 부분들이 있었다. 아직 추가해주고 싶은 기능들이 많지만 사용하면서 하나씩 수정해줄거고 공유하면 좋을 내용들은 블로그에 작성할 예정~! 😎✨\"}]},{\"type\":\"element\",\"tag\":\"style\",\"children\":[{\"type\":\"text\",\"value\":\".ct-836158{color:#24292F;}\\n.dark .ct-836158{color:#C9D1D9;}\\n.sepia .ct-836158{color:#F8F8F2;}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"nuxt-tailwinds-css\",\"depth\":2,\"text\":\"Nuxt + Tailwinds CSS\",\"children\":[{\"id\":\"_1-템플릿-선정\",\"depth\":3,\"text\":\"1. 템플릿 선정\"},{\"id\":\"_2-github-repo-만들기\",\"depth\":3,\"text\":\"2. GitHub repo 만들기\"},{\"id\":\"_3-내용-작성-디자인-수정하기\",\"depth\":3,\"text\":\"3. 내용 작성 + 디자인 수정하기\"},{\"id\":\"_4-git-push\",\"depth\":3,\"text\":\"4. git push\"}]},{\"id\":\"hosting-google-domain-연결\",\"depth\":2,\"text\":\"Hosting + Google Domain 연결\",\"children\":[{\"id\":\"_1-netlify-설정\",\"depth\":3,\"text\":\"1. Netlify 설정\"},{\"id\":\"_2-site-name-설정\",\"depth\":3,\"text\":\"2. site name 설정\"},{\"id\":\"_3-domain-설정\",\"depth\":3,\"text\":\"3. Domain 설정\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:blog:2023-03-08-blogbuild.md\",\"_source\":\"content\",\"_file\":\"blog/2023-03-08-blogbuild.md\",\"_extension\":\"md\"},\"hash\":\"gLjhdUk82w\"}";

export { _20230308Blogbuild as default };
//# sourceMappingURL=2023-03-08-blogbuild.mjs.map
