import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    efectivo: '',
    cuentasCobrar: '',
    otrasCuentasCobrar: '',
    inventarios: '',
    otrosActivosCorrientes: '',
    propiedadEquipo: '',
    otrosActivos: '',
    inversionSubsidiaria: '',
    cuentasPagar: '',
    prestamos: '',
    otrasCuentasPagar: '',
    capitalSocial: '',
    reservaLegal: '',
    resultadosAcumulados: '',
    resultadoEjercicio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Activos y Pasivos</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Activo Corriente</h3>
          <div>
            <label className="block mb-1">Efectivo y Equivalente de Efectivo</label>
            <input
              type="number"
              name="efectivo"
              value={formData.efectivo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Cuentas por Cobrar</label>
            <input
              type="number"
              name="cuentasCobrar"
              value={formData.cuentasCobrar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Otras Cuentas por Cobrar</label>
            <input
              type="number"
              name="otrasCuentasCobrar"
              value={formData.otrasCuentasCobrar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Inventarios</label>
            <input
              type="number"
              name="inventarios"
              value={formData.inventarios}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Otros Activos Corrientes</label>
            <input
              type="number"
              name="otrosActivosCorrientes"
              value={formData.otrosActivosCorrientes}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold">Activo No Corriente</h3>
          <div>
            <label className="block mb-1">Propiedad Planta y Equipo</label>
            <input
              type="number"
              name="propiedadEquipo"
              value={formData.propiedadEquipo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Otros Activos</label>
            <input
              type="number"
              name="otrosActivos"
              value={formData.otrosActivos}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Inversiones en Subsidiarias</label>
            <input
              type="number"
              name="otrosActivos"
              value={formData.inversionSubsidiaria}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold">Pasivo Corriente</h3>
          <div>
            <label className="block mb-1">Cuentas por Pagar Comerciales</label>
            <input
              type="number"
              name="cuentasPagar"
              value={formData.cuentasPagar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Préstamos Bancarios</label>
            <input
              type="number"
              name="prestamos"
              value={formData.prestamos}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Otras Cuentas por Pagar</label>
            <input
              type="number"
              name="otrasCuentasPagar"
              value={formData.otrasCuentasPagar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold">Patrimonio</h3>
          <div>
            <label className="block mb-1">Capital Social</label>
            <input
              type="number"
              name="capitalSocial"
              value={formData.capitalSocial}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Reserva Legal</label>
            <input
              type="number"
              name="reservaLegal"
              value={formData.reservaLegal}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Resultados Acumulados</label>
            <input
              type="number"
              name="resultadosAcumulados"
              value={formData.resultadosAcumulados}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Resultado del Ejercicio</label>
            <input
              type="number"
              name="resultadoEjercicio"
              value={formData.resultadoEjercicio}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Guardar
        </button>
      </form>
    </div>
    </>
  )
}

export default App
