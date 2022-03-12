package handlers

import "gorm.io/gorm"

type handler struct {
	Db *gorm.DB
}
