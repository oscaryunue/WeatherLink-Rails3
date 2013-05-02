class RegistoController < ApplicationController
  def Listar
      @params = TxtToParam.saved_rows
  end

  def Buscar
  end
end
