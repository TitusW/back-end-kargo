package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/TitusW/team4-kargo-excellerate/models"
	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

type DriverHandler interface {
	GetDrivers(w http.ResponseWriter, r *http.Request)
	GetDriverById(w http.ResponseWriter, r *http.Request)
	CreateDriver(w http.ResponseWriter, r *http.Request)
	UpdateDriver(w http.ResponseWriter, r *http.Request)
}

func NewDriverHandler(db *gorm.DB) DriverHandler {
	return &handler{Db: db}
}

type DriverResponse struct {
	ID           int
	Name         string
	Phone_number string
	Created_at   string
	Updated_at   string
	Status       bool
}

func (h *handler) GetDrivers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var drivers []models.Driver
	var DRs []DriverResponse
	h.Db.Find(&drivers)

	for i := 0; i < len(drivers); i++ {
		DR := DriverResponse{
			ID:           drivers[i].ID,
			Name:         drivers[i].Name,
			Phone_number: drivers[i].Phone_number,
			Created_at:   drivers[i].CreatedAt.String(),
			Updated_at:   drivers[i].UpdatedAt.String(),
			Status:       drivers[i].Status,
		}

		DRs = append(DRs, DR)
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(DRs)
}

func (h *handler) GetDriverById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	id := mux.Vars(r)["id"]
	var driver models.Driver
	h.Db.First(&driver, id)
	fmt.Println(driver.Model.ID)

	var DR DriverResponse = DriverResponse{
		ID:           driver.ID,
		Name:         driver.Name,
		Phone_number: driver.Phone_number,
		Created_at:   driver.CreatedAt.String(),
		Updated_at:   driver.UpdatedAt.String(),
		Status:       driver.Status,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(DR)
}

func (h *handler) CreateDriver(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var driver models.Driver
	json.NewDecoder(r.Body).Decode(&driver)
	h.Db.Create(&models.Driver{
		Name:         driver.Name,
		Phone_number: driver.Phone_number,
		Status:       driver.Status,
	})

	res := map[string]interface{}{
		"id":      strconv.Itoa(int(driver.Model.ID)),
		"Succeed": true,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(res)
}

func (h *handler) UpdateDriver(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	id := mux.Vars(r)["id"]
	var driver models.Driver
	h.Db.First(&driver, id)
	json.NewDecoder(r.Body).Decode(&driver)
	h.Db.Model(&driver).Updates(&models.Driver{
		Name:         driver.Name,
		Phone_number: driver.Phone_number,
		Status:       driver.Status,
	})

	res := map[string]interface{}{
		"id":      id,
		"message": "Update Driver Successful",
	}
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(res)
}
