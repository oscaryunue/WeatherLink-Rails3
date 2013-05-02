require 'test_helper'

class GraficasControllerTest < ActionController::TestCase
  test "should get Dashboard" do
    get :Dashboard
    assert_response :success
  end

  test "should get Diario" do
    get :Diario
    assert_response :success
  end

  test "should get Semana" do
    get :Semana
    assert_response :success
  end

  test "should get Mes" do
    get :Mes
    assert_response :success
  end

  test "should get Comparacion" do
    get :Comparacion
    assert_response :success
  end

end
