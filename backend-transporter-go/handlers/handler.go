package handlers

import "gorm.io/gorm"

type handler struct {
	db *gorm.DB
}
