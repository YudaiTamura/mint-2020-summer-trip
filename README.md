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

- 基本は React + TypeScript で開発
- 状態管理は React Hooks の機能を使用
- スタイルは styled-component を使用
- フレームワークに GatsbyJS を採用予定
- パッケージマネージャーは GatsbyJS を使う関係上 yarn を採用
- コンテンツ管理には Contentful を予定
- しおりのデザインは描き起さず、直接コーディングする(Figma を使いたい気持ちはあった)
- スマホでの閲覧のみを想定
- 暇があればレスポンシブ化

### 開発環境構築方法

```
$ git clone https://github.com/YudaiTamura/mint-2020-summer-trip.git
もしくは
$ git clone git@github.com:YudaiTamura/mint-2020-summer-trip.git

$ cd mint-2020-summer-trip
$ yarn install
$ yarn start
```

## デプロイ

- デプロイ先 [https://mint-2020-summer-trip.web.app/]
- デプロイには firebase hosting を利用
- firebase functions で basic 認証
- CI には GitHub Actions を採用
- Contentful のコンテンツ更新をトリガーに GitHub Actions でのデプロイができるようにしたい
