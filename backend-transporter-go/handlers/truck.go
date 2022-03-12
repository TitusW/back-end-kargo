package handlers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/TitusW/team4-kargo-excellerate/models"
	"gorm.io/gorm"
)

type TruckHandler interface {
	GetTrucks(w http.ResponseWriter, r *http.Request)
	CreateTruck(w http.ResponseWriter, r *http.Request)
	UpdateTruck(w http.ResponseWriter, r *http.Request)
}

func NewTruckHandler(db *gorm.DB) TruckHandler {
	return &handler{db: db}
}

func (h *handler) GetTrucks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var truck []models.Truck
	h.db.Find(&truck)

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(truck)
}

func (h *handler) CreateTruck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	body, _ := ioutil.ReadAll(r.Body)
	r.Body.Close()

	type truckRaw struct {
		LicenseNumber  string `json:"licenseNumber"`
		LicenseType    string `json:"licenseType"`
		TruckType      string `json:"truckType"`
		ProductionYear int    `json:"productionYear"`
	}

	var data truckRaw

	err := json.Unmarshal(body, &data)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	h.db.Create(&data)

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode("Create Trucks")
}

func (h *handler) UpdateTruck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode("Update Trucks")
}
