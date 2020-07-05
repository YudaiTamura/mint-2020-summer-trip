# 2020 年 ミント同期 お盆旅行のしおり

## git について

### ブランチ戦略

ブランチ戦略は git flow でやります。ただし hot-fix は使わない予定。develop がデフォルトブランチになっているので feature ブランチを切って開発してください。プルリクは develop に対してお願いします。

```
# git flowのcliをインストール
$ brew install git-flow

# ブランチを切るときのコマンド
$ git flow feature start <ブランチ名>
```

## 開発言語

- 基本は **React + TypeScript** で開発します。できるだけ Hooks の機能を使って完結させたいが、状態が多くなってきたら Redux も入れるかも。
- スタイルは styled-component を予定しています。
- しおりのデザインはまだ考えていません。どんなページが欲しいか、Issue にあげてもらえると助かります。

### 開発環境構築方法

```
$ git clone https://github.com/YudaiTamura/mint-2020-summer-trip.git
もしくは
$ git clone git@github.com:YudaiTamura/mint-2020-summer-trip.git

$ cd mint-2020-summer-trip
$ npm install
$ npm start
```

## デプロイ環境

- デプロイ先 [https://mint-2020-summer-trip.web.app/]
- デプロイには firebase hosting を利用しています。
- firebase functions で basic 認証してます。
- master にマージされると GitHub Actions が動いて自動的にデプロイされます。

## 留意

- firebase functions の Node のバージョンが 8.x なので流石に古すぎる。それに合わせて GitHub Actions の Node のバージョンも 8.x にしている。せめて 12.x にしたいと思ってる。
