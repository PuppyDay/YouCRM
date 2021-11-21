class Company < ApplicationRecord
  has_one_attached :avatar

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: true
  has_many :users
  has_many :clients
  has_many :client_companies
  has_many :emails
  has_many :roles
  has_many :walls
  has_many :statuses
  has_many :categories
  has_many :products
  has_many :services

  TYPE_CLIENTS = [[:human, 'Человек'], [:company, 'Компания']]
  TYPE_PRODUCT = [[:product, 'Товар'], [:service, 'Услуга']]
end
