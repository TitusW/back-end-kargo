package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/TitusW/team4-kargo-excellerate/models"
	"gorm.io/gorm"
)

type DriverHandler interface {
	GetDrivers(w http.ResponseWriter, r *http.Request)
	CreateDriver(w http.ResponseWriter, r *http.Request)
	UpdateDriver(w http.ResponseWriter, r *http.Request)
}

func NewDriverHandler(db *gorm.DB) DriverHandler {
	return &handler{db: db}
}

func (h *handler) GetDrivers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var driver []models.Driver
	h.db.Find(&driver)

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(driver)
}

func (h *handler) CreateDriver(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode("Create Drivers")
}

func (h *handler) UpdateDriver(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode("Update Drivers")
}
