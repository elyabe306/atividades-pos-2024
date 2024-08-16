from xml.dom.minidom import parse

dom = xml.dom.minidom.parse("cardapio.xml")

cardapio = dom.documentElement

pratos = cardapio.getElementsByTagName('prato')

print(pratos)


