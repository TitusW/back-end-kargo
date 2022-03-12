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

type TruckHandler interface {
	GetTrucks(w http.ResponseWriter, r *http.Request)
	GetTruckById(w http.ResponseWriter, r *http.Request)
	CreateTruck(w http.ResponseWriter, r *http.Request)
	UpdateTruck(w http.ResponseWriter, r *http.Request)
}

func NewTruckHandler(db *gorm.DB) TruckHandler {
	return &handler{Db: db}
}

type TruckResponse struct {
	ID              int
	License_number  string
	License_type    string
	Truck_type      string
	Production_year string
	Created_at      string
	Updated_at      string
}

func (h *handler) GetTrucks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var trucks []models.Truck
	var TRs []TruckResponse
	h.Db.Find(&trucks)

	for i := 0; i < len(trucks); i++ {
		TR := TruckResponse{
			ID:              trucks[i].ID,
			License_number:  trucks[i].License_number,
			License_type:    trucks[i].License_type,
			Truck_type:      trucks[i].Truck_type,
			Production_year: trucks[i].Production_year,
			Created_at:      trucks[i].CreatedAt.String(),
			Updated_at:      trucks[i].UpdatedAt.String(),
		}

		TRs = append(TRs, TR)
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(TRs)
}

func (h *handler) GetTruckById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	id := mux.Vars(r)["id"]
	var truck models.Truck
	h.Db.First(&truck, id)
	fmt.Println(truck.Model.ID)

	var TR TruckResponse = TruckResponse{
		ID:              truck.ID,
		License_number:  truck.License_number,
		License_type:    truck.License_type,
		Truck_type:      truck.Truck_type,
		Production_year: truck.Production_year,
		Created_at:      truck.CreatedAt.String(),
		Updated_at:      truck.UpdatedAt.String(),
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(TR)
}

func (h *handler) CreateTruck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var truck models.Truck
	json.NewDecoder(r.Body).Decode(&truck)
	h.Db.Create(&models.Truck{
		License_number:  truck.License_number,
		License_type:    truck.License_type,
		Truck_type:      truck.Truck_type,
		Production_year: truck.Production_year,
	})

	res := map[string]interface{}{
		"id":      strconv.Itoa(int(truck.Model.ID)),
		"Succeed": true,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(res)
}

func (h *handler) UpdateTruck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	id := mux.Vars(r)["id"]
	var truck models.Truck
	h.Db.First(&truck, id)
	json.NewDecoder(r.Body).Decode(&truck)
	h.Db.Model(&truck).Updates(&models.Truck{
		License_number:  truck.License_number,
		License_type:    truck.License_type,
		Truck_type:      truck.Truck_type,
		Production_year: truck.Production_year,
	})

	res := map[string]interface{}{
		"id":      id,
		"message": "Update Truck Successful",
	}
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(res)
}
