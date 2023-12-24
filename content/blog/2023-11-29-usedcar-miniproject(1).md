---
title: 중고차 가격 예측 미니 프로젝트(1)
date: "2023-11-30"
tags: ["miniproject", "kaggle", "ML", "NLP"]
draft: false
summary: kaggle의 used car data를 활용한 mini proejct 관련한 첫번째 글입니다. 프로젝트 설계부터 Data Cleaning 까지의 내용을 다룹니다.
---

<div style="color:#F08080;border-radius:10px;text-align:center;">
    <h3><em><span style="color:#F08080;">❝</span></em></h3>
    <h3><em><span style="color:#F08080;">작성 중인 문서입니다.</span></em></h3>
    <h3><em><span style="color:#F08080;">❞</span></em></h3>
</div>

> - 사용데이터: [kaggle 중고차 데이터](https://www.kaggle.com/datasets/tunguz/used-car-auction-prices)
> - 데모 코드 깃헙: [2023BigData_teamproject](https://github.com/JeongYunLee/2023BigData_teamproject)

수강하고 있는 수업에서 진행한 '중고차 가격, 조건 예측 모델' term project 입니다. 요즘에 중고차에 관심이 많은 개인적인 사심이 살짝 들어가기도 했고, 현대기아에서 중고차 시장에 진출하는 사회적 이슈와도 적당히 맞는 것 같아서 주제를 선정했습니다.

## 0. 프로젝트 설계

본 프로젝트의 핵심은 중고차의 '가격'만 예측하는 모델이 아니라는 점입니다. kaggle에는 이미 used car 관련 데이터도 많고, 관련 분석도 많은데 대부분 regression을 활용한 가격 예측을 목표로 두고 있습니다. 연식, 주행거리 등의 조건을 넣었을 때 해당 자동차의 가격을 알려주는 방식이죠. 저희는 역으로, 소비자가 중고차 딜러가 알려주는 가격이 해당 자동차에 적당한가?를 판단할 수 있으면 어떻까 생각했습니다. 대개 소비자는 딜러가 알려주는 가격을 시세와 비교해서 적당한 지 스스로 판단하는데, 이걸 시세와 비교하지 않고 해당 자동차는 평균적으로 이정도 가격에 팔리고, 이와 유사한 자동차들의 조건은 다음과 같다는 걸 알려주는 모델이 있으면 편리할 것 같다는 이유였습니다.

정리하면, feature는 조건(주행거리, 연식, 상태 등)과 딜러가 제시한 가격이 되고 다음 두 가지 결과를 얻을 수 있습니다.

- feature에 따른 '적합', '부적합'을 알려주기
- 해당 feature와 유사한 그룹의 평균적인 가격 및 조건을 알려주기

우선 첫 번째 방법은 classification으로 접근할 수 있습니다. classification은 대표적인 supervised learnging이기 때문에 정답값, 즉 label이 필요한데 분석에 사용한 kaggle의 데이터를 살펴보면, 정답값으로 사용할 만한 라벨이 없습니다. 기조의 중고차 시장 역시 가격이 적합한지 적합하지 않은지는 주관적으로 판단하는 문제였기 때문이겠지요. 그래서 저희는 <b>classification의 정답값, label을 clustering을 통해 부여하면 어떨까 라는 아이디어</b>를 떠올립니다.

방법은 다음과 같습니다.

1. clustering을 통해서 유사한 집단 그룹끼리 묶어주기
2. 해당 그룹 별로 feature들의 대표값을 만들어서 해당 데이터를 통해서 classificaiton 모델 만들기
3. 기존의 데이터로 해당 모델 predict

추가로, <b>텍스트 임베딩 clustering</b>도 진행합니다. 텍스트 임베딩은 처음에 고려하지 않았는데, 데이터를 확인해보니 범주형 데이터가 굉장히 많았는데, clustering의 경우 범주형 데이터를 dummy화 하거나 one-hot vector로 바꾼 feature는 사용하지 않는다는 글을 보아서 전부 제외했더니 막상 feauture로 사용할 수 있는게 4~5개 정도 밖에 없었습니다. 그 중에는 자동차의 model이나 manufacturer, color 등 자동차 가격에 꽤 영향을 미칠 요소들이 많아 보여서 이 값들을 어떻게 사용할까 생각하다가 <b>모든 feature들을 문장으로 만들어서 임베딩한 뒤, 해당 임베딩 벡터로 clustering을 진행</b>하면 성능이 어떻게 나올지 테스트를 해보기로 했습니다. input text는 다음과 같습니다.

```md
This car, produced in 2005, is a KIA K7 with the T5 trim. It features a sedan style, operates with a automatic transmission. Being in 2.7 condition, the car has traveled approximately 500000 kilometers. ...
```

이렇게 적어보니, 모든 과정이 challenging한 것들이네요. 성능이 잘 나올진 모르겠지만, 일단 고!  
이제 본격적으로 데이터를 살펴봅시다!!

## 1. EDA

이후 본격적인 모델 학습과 관련된 내용은 다음 (2) 글에서 다룹니다~
