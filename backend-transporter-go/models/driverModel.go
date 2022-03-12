package models

import (
	"time"

	"gorm.io/gorm"
)

type Driver struct {
	gorm.Model
	Name         string
	Phone_number string
	Created_at   time.Time
	Updated_at   time.Time
	Status       bool
}
