package models

// Truck defines the structure for an API truck
// swagger:model
type Truck struct {
	// the id for the truck
	//
	// required: false
	// min: 1
	ID int `json:"id"` // Unique identifier for the truck

	// the license number for this truck
	//
	// required: true
	// min length: 1
	LicenseNumber string `json:"license_number" validate:"required"`

	// the license type for this truck
	//
	// required: true
	// min length: 1
	LicenseType string `json:"license_type" validate:"required"`

	// the type for this truck
	//
	// required: true
	// min length: 1
	TruckType string `json:"truck_type" validate:"required"`

	// the production year for this truck
	//
	// required: true
	// min: 1
	ProductionYear int `json:"production_year" validate:"required"`

	// the STNK for this truck
	//
	// required: true
	// min length: 1
	// STNK string `json:"stnk" validate:"required"`

	// the KIR for this truck
	//
	// required: true
	// min length: 1
	// KIR string `json:"kir" validate:"required"`

	// the date when this truck was created
	//
	// required: false
	CreatedAt string `json:"createdAt"`

	// the date when this truck was created
	//
	// required: false
	UpdatedAt string `json:"updatedAt"`
}

type Trucks []*Truck

func GetTrucks() (Trucks, error) {
	var trucks Trucks
	DB := db.GetDB()
}
