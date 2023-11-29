---
title: <Mediawiki-2> Mediawiki 환경설정
date: "2023-08-10"
tags: ["Wikibase", "Mediawiki"]
draft: false
summary: Mediawiki의 기본적인 환경설정을 하는 방법을 알아봅니다.
---

<div style="color:#F08080;border-radius:10px;text-align:center;">
    <h3><em><span style="color:#F08080;">❝</span></em></h3>
    <h3><em><span style="color:#F08080;">2023-11-29에 수정된 문서 입니다</span></em></h3>
    <h3><em><span style="color:#F08080;">❞</span></em></h3>
</div>

Wikibase의 환경설정은 대부분 LocalSettings.php에서 진행한다. LocalSettings.php는 도커 내부로 들어가야 하는데, 도커 데스트탑을 사용하는 경우, 토커 터미널에서 들어가거나 폴더 부분에서 var/www/html 경로에 있는 LocalSettings.php를 찾을 수 있다.

> terminal 명령어 예시
>
> - ls: 현재 경로의 전체 폴더와 파일 확인하기
> - cd .. : 뒷 경로로 이동
> - cd 경로명: 작성한 경로로 이동
> - apt-get-update: 설치 가능한 패키지 버전 업데이트
> - apt-get install 패키지 명: 패키지 설치 - 예) apt-get install vim: 수정 툴인 vim을 설치하라!
> - vi 파일명: 파일 수정 모드로 들어가기 -> i 누르면 수정모드 활성화 -> 수정한 내용이 있다면 :wq 눌러서 종료 --> 없다면 :qa 눌러서 종료
> - cat 파일명: 파일 전체 내용 확인하기 (확인만 가능)

### 1. Skin 변경하기

wikibase에서 제공하는 skin의 종류는 다양하고 그 리스트는 공식 사이트의 [Category:All_skins](https://www.mediawiki.org/wiki/Category:All_skins/ko)에서 확인할 수 있다.

다음은 Minerva_Neue 스킨으로 바꾸는 예시이다.

1. 우선 원하는 스킨 폴더가 있는지 확인해야 한다. cd var/www/html/skins 으로 들어가서 원하는 스킨 폴더가 있는지 확인하고 없다면 공식 사이트에서 스킨을 다운 받아서 해당 도커의 경로에 폴더를 넣어줘야 한다. 도커 내부에 파일이나 폴더를 넣는 터미널 코드는 다음과 같다.

```md
docker cp 로컬경로/logo.png 컨테이너이름:도커내부경로
```

2. LocalSettings.php에서 다음 코드를 추가하거나 수정한다.

```php
wfLoadSkin( 'MinervaNeue' );
$wgDefaultSkin = 'minerva';
```

참고: [Skin:Minerva_Neue](https://www.mediawiki.org/wiki/Skin:Minerva_Neue)

### 2. Logo, Favicon 설정 (이미지파일 업로드)

로고나 파비콘을 설정할 때 모두 이미지 파일이 경로에 있어야 하고 LocalSettings.php의 `$wgEnableUploads = false;` 이 부분이 True로 설정되어 있어야 한다.

1. 로고 바꾸는 방법
   LocalSettings.php에서 다음 코드를 추가한다.

```php
$wgLogo = "$wgScriptPath/resources/assets/hike_logo.png"
```

2. 파비콘 바꾸는 방법
   LocalSettings.php에서 다음 코드를 추가한다.

```php
$wgFavicon = "$wgScriptPath/resources/assets/favicon.ico";
```

참고: [블로그](https://zetawiki.com/wiki/미디어위키_파비콘_설정_$wgFavicon), [사이트1](https://www.hostknox.com/knowledgebase/638/How-to-change-the-logo-in-MediaWiki.html), [사이트2](https://www.siteground.com/kb/how_to_change_my_mediawiki_logo_image/)

### 3. SideBar 수정하기

사이드바는 해당 경로로 들어가면 "내 wikibase 도메인주소/wiki/MediaWiki:Sidebar" 다음과 같은 내용이 나온다.

```md
- navigation
  ** mainpage|mainpage-description
  ** recentchanges-url|recentchanges
  ** Special:Log/delete|삭제 기록
  ** randompage-url|randompage
  \*\* helppage|help-mediawiki
- Category
  ** Special:AllPages|전체 문서
  ** https://labs.datahub.kr/wiki/Special:AllPages?from=&to=&namespace=120|전체 아이템 리스트
  ** Special:ListProperties|전체 속성 리스트
  ** Special:ListFiles|전체 파일 리스트
- Create
  ** Special:NewItem|새 아이템 생성
  ** Special:NewProperty|새 속성 생성
- SEARCH
- TOOLBOX
- LANGUAGES
```

간단히 설명하자면 \* 은 카테고리 제목을 의미하고 \*\* 은 하위 카테고리 제목을 의미한다.
|을 기준으로 앞에는 연결될 링크 혹은 wikibase의 페이지명 (예: Special:AllPages) 뒤에는 실제 사이드 바에 노출된 텍스트를 적어주소 저장한 뒤 제대로 적용됐는 지 확인하면 된다.

### 4. New Page (Page, Item, Porperty 등) 생성하기

1.  Page 편집
    편집하고 싶은 문서의 제목을 검색합니다.
    검색된 문서가 없다면 새 문서를 링크를 통해서 생성하세요.
    기존 문서 수정은 우측 상단의 '편집' 탭을 눌러서 실행합니다.
    수정 사항 시 이슈가 있다면 문서 제목 하단 좌측의 '토론' 탭을 눌러 이슈를 작성합니다.

2.  Page 생성
    문서를 생성하는 방법은 두 가지가 있습니다. 둘 중 원하는 방법을 선택하여 진행하세요.

    2-1. 검색 후 생성  
     생성하고 싶은 문서의 제목을 검색합니다.
    검색된 문서가 있다면 해당 페이지의 내용을 수정, 추가합니다.
    검색된 문서가 없다면 새 문서를 링크를 통해서 생성하세요.

    2-2. URL 사용

    새 문서를 생성할 때 위키의 URL을 사용할 수 있습니다. URL을 다음과 같이 수정하세요:

    `http://[도메인주소]/[새로운페이지제목]`

    새 문서가 생성되면 '편집' 버튼을 클릭해 내용을 작성하세요.

3.  Item 편집
    편집하고 싶은 아이템의 제목을 검색합니다.
    검색된 아이템이 없다면 Special:NewItem 을 통해서 생성하세요.
    기존 아이템 수정은 우측 상단의 '편집' 탭을 눌러서 실행합니다.
    수정 사항 시 이슈가 있다면 아이템 이름 하단 좌측의 '토론' 탭을 눌러 이슈를 작성합니다.

4.  Item 생성
    생성하고 싶은 아이템의 제목을 검색합니다.
    검색된 아이템이 없다면 Special:NewItem 을 통해서 생성하세요.

5.  Property 편집
    현재 속성 편집은 관리자 외 불가합니다.
    생성된 속성과 관련한 이슈가 있다면 속성 이름 하단 좌측의 '토론' 탭을 눌러 이슈를 작성합니다.

6.  Property 생성
    생성하고 싶은속성의 제목을 검색합니다.
    검색된 속성이 없다면 Special:NewItem 을 통해서 생성하세요.

### 5. Extension 추가하기

`cd extensions`로 들어가서 원하는 확장 파일을 업로드합니다. 업로드 후 LocalSettings.php에서 `wfLoadExtension( '' );`안에 추가한 확장자를 작성합니다.

### 6. 메일 에러 고치기

google mail을 기준으로 합니다.

1. `apt-get install sendmail` 실행한 뒤
2. LocalSettings.php 에 다음 내용을 추가합니다.

   ```jsx
   $wgEnableEmail = true;
   $wgEnableUserEmail = true;
   $wgEmergencyContact = "cathx618@gmail.com";
   $wgEmailAuthentication = true;
   ```

3. [해당 링크](https://support.google.com/accounts/answer/185833?hl=ko)로 들어가서 앱 비밀번호를 발급받습니다.
4. 발급받은 비밀번호를 아래 password에 넣어주고 LocalSettings.php에 추가해줍니다.

   ```jsx
   $wgSMTP = [
         'host'=> "smtp.gmail.com",
         'IDHost'   => "gmail.com",
         'port'     => 587,
         'auth'     => true,
         'username' => "[이메일주소]",
         'password' => "[발급받은 비밀번호]"
   ];
   ```

### 7. 문서 대량 업로드

문서를 대량으로 업로드 하는 방법은 여러가지 있고 해당 블로그에서는 wikibaseintegrator를 사용하였습니다.
https://jyunlee.com/blog/2023-03-15-wikibabeintegrator 다음 글을 참고하세요.

### 8. 문서 대량 삭제

DeleteBatch 사용. 다음 [링크](https://www.mediawiki.org/wiki/Extension:DeleteBatch)의 가이드 순서대로 진행했습니다.
이후 DeleteBatch 페이지로 들어가서 `item:Q100 | No longer needed ` 와 같은 형식으로 삭제할 아이템을 하나씩 작성합니다. (tip: chatgpt를 활용하세요...)

### 9. 사용자 권한 설정

LocalSettings.php에서 다음 코드를 통해 설정합니다.

```jsx
## 회원가입 권한
$wgGroupPermissions['*']['createaccount'] = false;
## 수정 권한
$wgGroupPermissions['*']['edit'] = false;
```

false로 설정하면 회원가입과 수정 권한이 없습니다. admin이 새로운 계정을 만들기 위해서는 'http://[도메인주소]/Special:CreateAccount' 로 접속해서 생성할 수 있습니다.
