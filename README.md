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

## 開発

- 基本は **React + TypeScript** で開発します。状態管理は React Hooks の機能を使用。
- スタイルは styled-component を使用。
- しおりのデザインは描き起こしていません。頭で考えたものを直接コーディングしてます。(Figma を使いたい気持ちはあった)
- 画像サイズは iPhone XR の解像度である 828x1792 を基準とする。
- スマホでの閲覧のみを想定する。暇があればレスポンシブ化する。

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

- 無料で利用できる firebase functions の Node のバージョンが 8.x であり、サポートが終了している。2021/03/15 以降は実行もできなくなるらしい。有料版にアップグレードすれば 10.x が利用できるが、しおりに関しては無料枠内でやりたいので、warning が出るが、気にしないことにする。
