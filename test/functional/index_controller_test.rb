require 'test_helper'

class IndexControllerTest < ActionController::TestCase
  test "should get Inicio" do
    get :Inicio
    assert_response :success
  end

  test "should get Acerca" do
    get :Acerca
    assert_response :success
  end

  test "should get Construccion" do
    get :Construccion
    assert_response :success
  end

  test "should get Consultas" do
    get :Consultas
    assert_response :success
  end

  test "should get Contacto" do
    get :Contacto
    assert_response :success
  end

end
