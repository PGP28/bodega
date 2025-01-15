import React, { useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

function StockAseo() {
  const [stockData, setStockData] = useState([
    { codigo: '55 - 01', articulo: 'ALCOHOL GEL', saldo: '11.149', actual: 4 },
    { codigo: '55 - 02', articulo: 'ALUPLAST', saldo: '2.062', actual: 45 },
    { codigo: '55 - 03', articulo: 'AMONIO CUATERNARIO', saldo: '', actual: 5 },
    { codigo: '55 - 04', articulo: 'AZUCAR', saldo: '', actual: 24 },
    { codigo: '57 - 01', articulo: 'CAFÉ', saldo: '5.575', actual: 18 },
    { codigo: '57 - 02', articulo: 'CERA PISO  PLASTICA', saldo: '3.310', actual: 38 },
    { codigo: '57 - 03', articulo: 'CLORO', saldo: '1.271', actual: 22 },
    { codigo: '57 - 04', articulo: 'PAPEL HIGIENICO DOBLE HOJA ELITE', saldo: '2.526', actual: 56 },
    { codigo: '57 - 05', articulo: 'PAPEL HIGIENICO DOBLE HOJA CONFORT', saldo: '3.646', actual: '1.308' },
    { codigo: '58 - 01', articulo: 'DESODORANTE AMBIENTAL', saldo: '', actual: 157 },
    { codigo: '59 - 01', articulo: 'ESCUDO  FACIAL', saldo: 106, actual: 7 },
    { codigo: '59 - 02', articulo: 'ESPONJA LAVALOZA', saldo: 641, actual: 29 },
    { codigo: '61 - 02', articulo: 'GUANTES QUIRUGICOS', saldo: '5.115', actual: 0 },
    { codigo: '62 - 01', articulo: 'HIERBAS SILVESTRES', saldo: '4.965', actual: 43 },
    { codigo: '63 - 01', articulo: 'INSECTICIDA CASA Y JARDIN', saldo: '5.032', actual: 19 },
    { codigo: '64 - 01', articulo: 'JABON LIQUIDO', saldo: '1.854', actual: 38 },
    { codigo: '64 -02', articulo: 'JABON LIQUIDO BIDON', saldo: '2.541', actual: 76 },
    { codigo: '66 - 01', articulo: 'LAVALOZAS', saldo: '1.775', actual: 109 },
    { codigo: '66 - 02', articulo: 'LIMPIAVIDRIOS', saldo: '1.924', actual: 12 },
    { codigo: '66 - 03', articulo: 'LUSTRAMUEBLES', saldo: '2.342', actual: 39 },
    { codigo: '66 - 04', articulo: 'LYSOFORM', saldo: '3.660', actual: 70 },
    { codigo: '67 - 01', articulo: 'MAGO PADS', saldo: '1.115', actual: 9 },
    { codigo: '67 - 02', articulo: 'MASCARILLA KN 95', saldo: '1.173', actual: 60 },
    { codigo: '71 - 01', articulo: 'PAPEL HIGIENICO JUMBO', saldo: '10.408', actual: 32 },
    { codigo: '74 - 01', articulo: 'PAÑO PARA  PISO', saldo: '2.667', actual: 11 },
    { codigo: '74 - 02', articulo: 'SERVILLETA', saldo: 661, actual: 156 },
    { codigo: '75 - 01', articulo: 'TE', saldo: '1.277', actual: 98 },
    { codigo: '75 - 02', articulo: 'TOALLA CLINIC BEIGE', saldo: '', actual: 874 },
    { codigo: '75 - 03', articulo: 'TOALLA CLINIC BLANCA', saldo: '1.516', actual: 68 },
    { codigo: '75 - 04', articulo: 'TOALLA NOVA CLASICA', saldo: 524, actual: 58 },
    { codigo: '75 - 05', articulo: 'TOALLA  NOVA ULTRA', saldo: '1.134', actual: 25 },
    { codigo: '77 - 01', articulo: 'VIM LIQUIDO', saldo: '2.664', actual: 5 },
    { codigo: '77 - 02', articulo: 'SABANILLA TECNOROLL ELITE', saldo: '5.329', actual: 12 },
  ]);

  const [newItem, setNewItem] = useState({ codigo: '', articulo: '', saldo: '', actual: 0 });
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setStockData([...stockData, newItem]);
    setNewItem({ codigo: '', articulo: '', saldo: '', actual: 0 });
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
        <h4 className="text-center mb-4">MATERIAL DE ASEO - 07/10/2024</h4>

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
            <Form.Group controlId="articulo">
              <Form.Label>Articulo</Form.Label>
              <Form.Control
                type="text"
                value={newItem.articulo}
                onChange={(e) => setNewItem({ ...newItem, articulo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="saldo">
              <Form.Label>Saldo</Form.Label>
              <Form.Control
                type="text"
                value={newItem.saldo}
                onChange={(e) => setNewItem({ ...newItem, saldo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="actual">
              <Form.Label>Actual</Form.Label>
              <Form.Control
                type="number"
                value={newItem.actual}
                onChange={(e) => setNewItem({ ...newItem, actual: Number(e.target.value) })}
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
              <th>Articulo</th>
              <th>Saldo</th>
              <th>Actual</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.articulo}</td>
                <td>{item.saldo || 'N/A'}</td>
                <td>{item.actual}</td>
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

export default StockAseo;
