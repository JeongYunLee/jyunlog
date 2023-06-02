__NUXT_JSONP__("/blog/2023-03-10-wikibase", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{article:{slug:"2023-03-10-wikibase",description:"Docker로 Wikibase 설치하는 방법을 알아봅니다.",title:"Docker로 Wikibase 설치하기",tags:"wikibase, docker",date:"2023-03-10T00:00:00.000Z",author:"JeongYun Lee",draft:false,toc:[{id:t,depth:h,text:"1. docker composer -v"},{id:u,depth:h,text:v},{id:w,depth:h,text:x},{id:y,depth:h,text:z},{id:A,depth:h,text:B}],body:{type:"root",children:[{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"환경: MacOS (M2)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"docker 환경설정은 이미 되어 있는 것으로 가정"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:t},children:[{type:b,tag:f,props:{href:"#1-docker-composer--v",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:"1. "},{type:b,tag:g,props:{},children:[{type:a,value:"docker composer -v"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Window와 Mac은 docker desktop을 설치하면 자동으로 docker compose가 설정됩니다. "},{type:b,tag:g,props:{},children:[{type:a,value:"docker-compose -v"}]},{type:a,value:" 혹은 "},{type:b,tag:g,props:{},children:[{type:a,value:"docker-compose --version"}]},{type:a,value:" 을 실행했을 때 버전이 제대로 나오면 된다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(만약 '\u002Fusr\u002Flocal\u002Fbin\u002Fdocker-compose: line 1: Not: command not found' 이런 에러가 계속 나온다면 docker desktop 버전 업데이트 하면 됨.)"}]},{type:a,value:c},{type:b,tag:i,props:{id:u},children:[{type:b,tag:f,props:{href:"#2-wikibase-repo-%ED%81%B4%EB%A1%A0",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"git clone https:\u002F\u002Fgithub.com\u002Fwmde\u002Fwikibase-release-pipeline.git\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"깃헙 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fwmde\u002Fwikibase-release-pipeline",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"wikibase-integrator-pipeline"}]},{type:a,value:" 레포를 클론합니다."}]},{type:a,value:c},{type:b,tag:i,props:{id:w},children:[{type:b,tag:f,props:{href:"#3-env-%ED%8C%8C%EC%9D%BC-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"클론한 폴더 중 example 폴더 안에 'template.env'파일이 있을 것이다. 이 파일을 복사하고 이름을 '.env'로 바꿔준다. (맥에서는 .env 파일로 이름을 바꾸면 로컬에서 보이지 않을 수 있음. 필자는 code editor인 vscode에서 진행함)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:".env 파일에서 수정해줘야 할 부분은 다음과 같다. 필요에 따라 수정하거나 수정하지 않아도 되지만, 이후 wikibase를 사용할 때에도 해당 정보를 알고 있어야 한다."}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"MW_ADMIN_PASS"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"MW_ADMIN_NAME"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"MW_ADMIN_EMAIL"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"MW_SECRET_KEY"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"WIKIBASE_PORT"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:y},children:[{type:b,tag:f,props:{href:"#4-docker-container-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"docker-compose up -d \n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"-d 옵션은 는 백그라운드에서 실행하는 것을 의미한다.\n설치가 완료 된 뒤 추가적으로 quickstatements, elasticsearch 등을 설치하기 위해 다음 코드를 실행한다."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"docker-compose -f docker-compose.yml -f docker-compose.extra.yml up -d\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{alt:"docker",src:"\u002FblogImg\u002F2023-03-10-2.png"},children:[]}]},{type:a,value:c},{type:b,tag:i,props:{id:A},children:[{type:b,tag:f,props:{href:"#5-%EC%8B%A4%ED%96%89",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"설정한 포트 넘버로(localhost:####) 실행했을 때 상단의 화면과 같이 실행되면 성공!"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2023-03-10-wikibase",extension:".md",createdAt:"2023-03-14T08:13:31.309Z",updatedAt:"2023-03-20T03:19:46.037Z"},_img:{"/_ipx/_/../assets/author.png":"\u002F_nuxt\u002Fimage\u002Fd2d82c.png"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li","a","code",2,"h2","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","1-docker-composer--v","2-wikibase-repo-클론","2. wikibase repo 클론","3-env-파일-수정하기","3. .env 파일 수정하기","4-docker-container-생성하기","4. docker container 생성하기","5-실행","5. 실행","ul")));