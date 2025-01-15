import React, { useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

function StockFormularios() {
  const [stockData, setStockData] = useState([
    { codigo: '29 - 01', detalle: 'BOLETIN EGRESOS INVERSIONES', saldo: 500 },
    { codigo: '29 - 02', detalle: 'BOLETIN EGRESOS', saldo: 500 },
    { codigo: '29 - 03', detalle: 'BOLETIN DE INGRESOS', saldo: 1400 },
    { codigo: '29 - 04', detalle: 'BOLETIN DE TRASPASOS', saldo: '' },
    { codigo: '29 - 05', detalle: 'BOLETIN RETIRO DE FONDOS', saldo: 3000 },
    { codigo: '30 - 01', detalle: 'CARATULA DE CAJA', saldo: 400 },
    { codigo: '30 - 02', detalle: 'CARATULA DE TRASPASOS', saldo: 1100 },
    { codigo: '30 - 03', detalle: 'CHEQUERA PRESTAMO/ COBRANZA', saldo: 300 },
    { codigo: '30 - 04', detalle: 'COMPROBANTE DEPOSITO SANTANDER', saldo: 2 },
    { codigo: '30 - 05', detalle: 'CONTROL FERIADO', saldo: 500 },
    { codigo: '30 - 06', detalle: 'CUPONERA', saldo: 100 },
    { codigo: '32 - 01', detalle: 'EGRESO COBRANZA EMERGENCIA', saldo: 2000 },
    { codigo: '32 - 02', detalle: 'EGRESO COBRANZA IMPREVISTO', saldo: 500 },
    { codigo: '35 - 01', detalle: 'HOJA CARTA CON MEMBRETE', saldo: 63 },
    { codigo: '35 - 02', detalle: 'HOJA OFICIO CON MEMBRETE', saldo: 4 },
    { codigo: '39 - 01', detalle: 'LIQUIDACION COBRANZA POR AVAL', saldo: '' },
    { codigo: '39 - 02', detalle: 'LIQUIDACION PRESTAMO EMERGENCIA', saldo: 8000 },
    { codigo: '39 - 03', detalle: 'LIQUIDACION PRESTAMO INPREVISTO', saldo: 9000 },
    { codigo: '40 - 01', detalle: 'MODIFICACION PAGARE', saldo: 250 },
    { codigo: '43 - 01', detalle: 'ORIGINAL BLANCO 11X 9,5 X 1', saldo: 14000 },
    { codigo: '44 - 01', detalle: 'PAUTADO ORIGINAL 11 X 15 X1', saldo: 0 },
    { codigo: '46 - 01', detalle: 'REGISTRO DE FIRMAS', saldo: 200 },
    { codigo: '47 - 01', detalle: 'SACO  OFICIO EXTRA', saldo: 5900 },
    { codigo: '47 - 02', detalle: 'SACO  OFICIO', saldo: 8800 },
    { codigo: '47 - 03', detalle: 'SEGURO DE DESEMPLEO', saldo: 0 },
    { codigo: '47 - 04', detalle: 'SEGURO DE DESGRAVAMEN', saldo: 0 },
    { codigo: '47 - 05', detalle: 'SEGURO INCENDIO', saldo: 0 },
    { codigo: '47 - 06', detalle: 'SEGURO POR DECESO FAMILIAR', saldo: 0 },
    { codigo: '47 - 07', detalle: 'SEGURO POR MUERTE', saldo: 0 },
    { codigo: '47 - 08', detalle: 'SOBRE AMERICANO', saldo: 1900 },
    { codigo: '47 - 09', detalle: 'SOBRE AMERICANO CON VENTANA', saldo: 13100 },
    { codigo: '47 - 10', detalle: 'SOBRE MEDIO OFICIO', saldo: 3580 },
    { codigo: '47 - 11', detalle: 'SOLICITUD RETIRO DE FONDOS', saldo: 6900 },
    { codigo: '47 - 12', detalle: 'SOLICITUD DE  INGRESO', saldo: 13000 },
    { codigo: '47 - 13', detalle: 'SOLICITUD DE PRESTAMO', saldo: 5300 },
    { codigo: '47 - 14', detalle: 'SOLICITUD DE RETIRO PARCIAL FONDO', saldo: 3000 },
    { codigo: '48 - 01', detalle: 'TAPA POSTERIOR CAJA', saldo: 500 },
    { codigo: '48 - 02', detalle: 'TAPA POSTERIOR TRASPASO', saldo: 1500 },
    { codigo: '48 - 03', detalle: 'INFORME JEFE DE SERVICIO', saldo: 1380 },
  ]);

  const [newItem, setNewItem] = useState({ codigo: '', detalle: '', saldo: '' });
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setStockData([...stockData, newItem]);
    setNewItem({ codigo: '', detalle: '', saldo: '' });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    setStockData(stockData.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const itemToEdit = stockData[index];
    setNewItem(itemToEdit);
    setStockData(stockData.filter((_, i) => i !== index));
    setShowForm(true);
  };

  return (
    <div>
      <Container>
        <h2 className="text-center my-4">LISTADO DE SALDOS</h2>
        <h4 className="text-center mb-4">FORMULARIOS - 07/10/2024</h4>

        {!showForm && (
          <Button className="mb-3" onClick={() => setShowForm(true)}>
            Agregar Nuevo
          </Button>
        )}

        {showForm && (
          <Form className="mb-4">
            <Form.Group controlId="codigo">
              <Form.Label>Codigo</Form.Label>
              <Form.Control
                type="text"
                value={newItem.codigo}
                onChange={(e) => setNewItem({ ...newItem, codigo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="detalle">
              <Form.Label>Detalle De Formularios</Form.Label>
              <Form.Control
                type="text"
                value={newItem.detalle}
                onChange={(e) => setNewItem({ ...newItem, detalle: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="saldo">
              <Form.Label>Saldo Actual</Form.Label>
              <Form.Control
                type="number"
                value={newItem.saldo}
                onChange={(e) => setNewItem({ ...newItem, saldo: Number(e.target.value) })}
              />
            </Form.Group>
            <Button className="mt-2 me-2" onClick={handleAdd}>Guardar</Button>
            <Button className="mt-2" variant="secondary" onClick={() => setShowForm(false)}>Cancelar</Button>
          </Form>
        )}

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Detalle De Formularios</th>
              <th>Saldo Actual</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.detalle}</td>
                <td>{item.saldo || 'N/A'}</td>
                <td>
                  <Button variant="warning" className="me-2" onClick={() => handleEdit(index)}>
                    <FaPencilAlt />
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default StockFormularios;
