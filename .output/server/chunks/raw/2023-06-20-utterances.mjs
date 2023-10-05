// ROLLUP_NO_REPLACE 
 const _20230620Utterances = "{\"parsed\":{\"_path\":\"/blog/2023-06-20-utterances\",\"_dir\":\"blog\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"_empty\":false,\"title\":\"Nuxt로 만든 블로그에 utterances 댓글 기능 추가하기\",\"description\":\"\",\"date\":\"2023-06-20\",\"tags\":[\"Nuxt\",\"utterances\",\"GitHub\"],\"draft\":false,\"summary\":\"Nuxt로 만든 블로그에 github issue로 생기는 utterances 댓글 기능을 추가해봅니다.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"blockquote\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://velog.io/@outstandingboy/Github-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-%EB%8C%93%EA%B8%80-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-ft.-Utterances\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"참고 블로그\"}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nuxt로 블로그를 만들어서 사용하고 있는데 가장 아쉬운 부분은 Like 버튼이나 댓글 기능이 없다는 것이였다. 찾아보니 github의 issue로 생성되는 utterances 라는 라이브러리는 가볍고 광고도 없이 간단하게 추가할 수 있다고 해서 추가해봤다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_1-utterances-설치하기\"},\"children\":[{\"type\":\"text\",\"value\":\"1. Utterances 설치하기\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"이 \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://github.com/apps/utterances\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"링크\"}]},{\"type\":\"text\",\"value\":\"로 들어가서 Install 버튼을 누르면 된다. 설치가 된 경우 Install 버튼이 Configure로 바뀐다.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"다음과 같이 레포를 선택하는 부분이 나온다. 댓글 기능을 추가하고 싶은 레포를 선택해서 진행하면 된다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_2-설정하기\"},\"children\":[{\"type\":\"text\",\"value\":\"2. 설정하기\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"설치 후 설정 페이지로 이동해서 repo 부분에 계정명/저장소이름을 입력한다. Blog Post <--> Issue Mapping 부분에는 원하는 방법을 선택하면 된다. (Issue title contains page pathname으로 선택함)\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Issue Label에는 이슈에 달릴 라벨을 적어주면 되는데, 구분될 수 있도록 comments로 적어주었다.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"_3-nuxt-파일에서-설정하기\"},\"children\":[{\"type\":\"text\",\"value\":\"3. Nuxt 파일에서 설정하기\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"설정이 끝나면 아래와 같은 코드를 보여주고 copy를 하라는 버튼이 있을 것이다. 코드를 복사해서 본인의 블로그 파일로 넘어온다.\"}]},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[\"language-javascript\"],\"code\":\"<script\\n  src=\\\"https://utteranc.es/client.js\\\"\\n  repo=\\\"JeongYunLee/jyunlog\\\"\\n  issue-term=\\\"pathname\\\"\\n  label=\\\"Comment\\\"\\n  theme=\\\"github-light\\\"\\n  crossorigin=\\\"anonymous\\\"\\n  async\\n></script>\\n\",\"language\":\"javascript\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"pre\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-284786\"},\"children\":[{\"type\":\"text\",\"value\":\"script\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-939295\"},\"children\":[{\"type\":\"text\",\"value\":\"src\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-794887\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-169668\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"https://utteranc.es/client.js\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-939295\"},\"children\":[{\"type\":\"text\",\"value\":\"repo\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-794887\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-169668\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"JeongYunLee/jyunlog\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-939295\"},\"children\":[{\"type\":\"text\",\"value\":\"issue-term\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-794887\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-169668\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"pathname\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-939295\"},\"children\":[{\"type\":\"text\",\"value\":\"label\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-794887\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-169668\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"Comment\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-939295\"},\"children\":[{\"type\":\"text\",\"value\":\"theme\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-794887\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-169668\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"github-light\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-939295\"},\"children\":[{\"type\":\"text\",\"value\":\"crossorigin\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-794887\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-169668\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"anonymous\\\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"  \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-939295\"},\"children\":[{\"type\":\"text\",\"value\":\"async\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":9},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\"></\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-284786\"},\"children\":[{\"type\":\"text\",\"value\":\"script\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"ct-836158\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"나의 경우 파일 구조가 layouts/default.vue 이므로 default.vue에 복사한 코드를 넣어주기만 하면 됐다.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"댓글을 많이 많이 달아주세요~^_^~\"}]},{\"type\":\"element\",\"tag\":\"style\",\"children\":[{\"type\":\"text\",\"value\":\".ct-836158{color:#24292F;}\\n.dark .ct-836158{color:#C9D1D9;}\\n.sepia .ct-836158{color:#F8F8F2;}\\n.ct-284786{color:#116329;}\\n.dark .ct-284786{color:#7EE787;}\\n.sepia .ct-284786{color:#F92672;}\\n.ct-939295{color:#0550AE;}\\n.dark .ct-939295{color:#79C0FF;}\\n.sepia .ct-939295{color:#A6E22E;}\\n.ct-794887{color:#CF222E;}\\n.dark .ct-794887{color:#FF7B72;}\\n.sepia .ct-794887{color:#F92672;}\\n.ct-169668{color:#0A3069;}\\n.dark .ct-169668{color:#A5D6FF;}\\n.sepia .ct-169668{color:#E6DB74;}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"_1-utterances-설치하기\",\"depth\":3,\"text\":\"1. Utterances 설치하기\"},{\"id\":\"_2-설정하기\",\"depth\":3,\"text\":\"2. 설정하기\"},{\"id\":\"_3-nuxt-파일에서-설정하기\",\"depth\":3,\"text\":\"3. Nuxt 파일에서 설정하기\"}]}},\"_type\":\"markdown\",\"_id\":\"content:blog:2023-06-20-utterances.md\",\"_source\":\"content\",\"_file\":\"blog/2023-06-20-utterances.md\",\"_extension\":\"md\"},\"hash\":\"yW3h1kQjuP\"}";

export { _20230620Utterances as default };
//# sourceMappingURL=2023-06-20-utterances.mjs.map
