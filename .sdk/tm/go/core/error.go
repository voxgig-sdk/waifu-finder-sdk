package core

type WaifuFinderError struct {
	IsWaifuFinderError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWaifuFinderError(code string, msg string, ctx *Context) *WaifuFinderError {
	return &WaifuFinderError{
		IsWaifuFinderError: true,
		Sdk:              "WaifuFinder",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WaifuFinderError) Error() string {
	return e.Msg
}
