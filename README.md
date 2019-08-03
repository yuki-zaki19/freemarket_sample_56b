# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|最大２０文字|
|e-mail|string|null: false|
|password|integer or string|null: false|
|last-name|string|null: false|
|first-name|string|null: false|
|last-name-kana|string|null: false|
|first-name-kana|string|null: false|
|birthday|date|null: false|
|phone-number|integer|
|postal-code|integer|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|address|string or integer|null: false|
|building|string or integer|
|icon|string|


### Association
- has_many :products
- has_many :goods
- has_many :contacts
- belongs_to :credit
- has_many :evaluation
- belongs_to :idntification
- belongs_to :buyer

## productsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|インデックスつけるか検討|
|price|integer|null: false|
|user|refernces|null: false, foreign_key: true|
|category|string|null: false|
|brand|string|
|size|string or integer|
|state|string|null: false|
|burden|string|null: false|
|shipping|string|null: false|
|region|string|null: false|
|leadtime|string|null: false|
|explain|text|null: false|
|brand|string|
|status|string|null: false|出品中or取引中or売却済|

### Assosiation
- belongs_to :user
- has_many :goods
- has_many :contacts
- belongs_to :buyer
- has_many :images
- belongs_to :category

## contactテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|product|refernces|null: false, foreign_key: true|
|comment|text|

### Association
- belongs_to :product
- belongs_to :user

## goodテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|product|refernces|null: false, foreign_key: true|

### Association
- belongs_to :product
- belongs_to :user

## sellerテーブル
|Column|Type|Options|
|------|----|-------|
|seller_user|references|null: false, foreign_key: true|
|product|refernces|null: false, foreign_key: true|
|buyer_user|references|null: false, foreign_key: true|


### Association
- belongs_to :product
- belongs_to :user
- has_many :evaluation
- has_many :deals

## creditテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|customer|references|null: false, foreign_key: true|
|card|references|null: false, foreign_key: true|

### Association
- belongs_to user

## evaluationテーブル
|Column|Type|Options|
|------|----|-------|
|attack_user|references|null: false, foreign_key: true|
|receive_user|references|null: false, foreign_key: true|
|evaliation|string|null: false|

### Association
- belongs_to :seller
 
## imageテーブル
|Column|Type|Options|
|------|----|-------|
|product|references|null: false, foreign_key: true|
|image|string|null: false|

### Association
- belongs_to :product


## identificationテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|postal-code|integer|
|prefecture|string|
|city|string|
|address|string or integer|
|building|string or integer|

### Association
- belongs_to :user

## parentテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|

### Association
- belongs_to :child
- has_many :products

## childテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|
|parent|references|null: false, foreign_key: true|

###Association
- belongs_to :parent
- belongs_to :grandchild


## grandchildテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|
|child|references|null: false, foreign_key: true|


### Association
- belongs_to :parent
- belongs_to :grandchild

## dealsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|sales|integer|

### Associsation
- belongs_to :seller