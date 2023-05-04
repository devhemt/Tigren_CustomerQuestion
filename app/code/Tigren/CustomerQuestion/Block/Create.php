<?php

namespace Tigren\CustomerQuestion\Block;

use Magento\Framework\View\Element\Template;

class Create extends Template
{
    protected $request;
    protected $collection,$questionFactory;

    public function __construct(
        Template\Context $context,
        \Magento\Framework\App\RequestInterface $request,
        \Tigren\CustomerQuestion\Model\ResourceModel\TigrenCustomerQuestion\CollectionFactory $collection,
        \Tigren\CustomerQuestion\Model\TigrenCustomerQuestionFactory $questionFactory,
        array $data = []
    ) {
        $this->request = $request;
        $this->collection = $collection;
        $this->questionFactory = $questionFactory;
        parent::__construct($context, $data);
    }

}
