<?php

namespace Tigren\CustomerQuestion\Block;

use Magento\Framework\View\Element\Template;

class Index extends Template
{
    protected $request;

    public function __construct(
        Template\Context $context,
        \Magento\Framework\App\RequestInterface $request,
        array $data = []
    ) {
        $this->request = $request;
        parent::__construct($context, $data);
    }

}
