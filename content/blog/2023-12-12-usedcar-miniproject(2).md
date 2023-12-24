---
title: 중고차 가격 예측 미니 프로젝트(2)
date: "2023-12-12"
tags: ["miniproject", "kaggle", "ML", "NLP", "KMeans", "SBERT"]
draft: false
summary: kaggle의 used car data를 활용한 mini proejct 관련한 두번째 글입니다. 모델 학습의 내용을 다룹니다.
---

<div style="color:#F08080;border-radius:10px;text-align:center;">
    <h3><em><span style="color:#F08080;">❝</span></em></h3>
    <h3><em><span style="color:#F08080;">작성 중인 문서입니다.</span></em></h3>
    <h3><em><span style="color:#F08080;">❞</span></em></h3>
</div>

## 2. Regression

## 3. Clustering

### 3-1. 기본 clusteinrg

처음에 생각한 것 처럼 적합, 부적합 labeling을 하기에는 또 다른 주관적인 노이즈를 만드는 것 같아서 (평균에서 몇%까지는 적합하다는 기준을 다시 주관적으로 부여해야 하기 때문에) 진행하지 않고, 최종 결과는 classification의 결과로 나온 그룹의 대표 feature 값들을 보여주는 방식으로 진행했습니다.

clustering은 K-Means을 활용했습니다. K-Medoids와 DBSCAN도 시도했지만, 계산량이 너무 많거나 성능이 별로 좋지 않았습니다. clsutering과정에서 가장 애먹은 부분은 아무래도 적절한 K를 찾는 부분입니다. elbow method를 활용해봐도 적절한 elbow가 보이지 않고, silluette score를 계산해보면 K가 커질 수록 한없이 스코어가 높아졌습니다. 따라서 최대한 적합점을 찾은게 K=500이었으나, 사실 이 결론이 최선이었는지에 대한 확신은 없습니다..ㅎㅎ

clustering 이후 각 feature들에

### 3-2. Text clustering

학습한 모델로 간단한 데모 제작과 관련된 내용은 다음 (3) 글에서 다룹니다~

## 4. Classification
